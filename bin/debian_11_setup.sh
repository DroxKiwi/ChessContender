#!/bin/bash

# THIS SCRIPT IS ONLY USED TO SET UP A DISTANT DROPLET OR MACHINE

# Setup the backend server for the APP on a Debian 11 server
# Execute the following command to execute the script from a remote location:
#   ssh root@hostname 'bash -s' < local_script.sh

# Diplay commands and end script at first command fail or use of an unset variable
set -o errexit -o nounset -o xtrace -o pipefail

# Create tux user
useradd tux --create-home --shell /bin/bash
usermod --append --groups sudo tux
passwd --delete tux

# Update software repositories and install sudo
apt-get update
apt-get install --yes sudo

# Install Github CLI
# Source: https://github.com/cli/cli/blob/trunk/docs/install_linux.md
apt-get install --yes curl
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" > /etc/apt/sources.list.d/github-cli.list
apt update
apt install --yes gh

# Generate a SSH key for tux
sudo --user tux ssh-keygen -f /home/tux/.ssh/id_rsa -P ''

# Log in to Github
#? Upload your SSH public key to your GitHub account? /home/tux/.ssh/id_rsa.pub
#? Title for your SSH key: GitHub CLI
#? How would you like to authenticate GitHub CLI? Paste an authentication token
sudo --user tux gh auth login --hostname github.com --git-protocol ssh

# Clone the Git repository from Github
cd /home/tux
sudo --user tux ssh -o StrictHostKeyChecking=no git@github.com || true
sudo --user tux git clone git@github.com:DroxKiwi/studiECF2023_Fredj_Corentin.git

# Log out from Github
sudo --user tux gh auth logout


# Define the system proxy
# Source: https://computingforgeeks.com/how-to-set-system-proxy-on-debian-linux/
cat << HEREDOC >> /etc/profile.d/proxy.sh
# set proxy config via profie.d - should apply for all users
# http/https/ftp/no_proxy
export http_proxy='http://127.0.0.1:7080/proxy.pac'
export https_proxy='http://127.0.0.1:7080/proxy.pac'
export ftp_proxy='http://127.0.0.1:7080/proxy.pac'
export no_proxy='127.0.0.1,localhost'
HEREDOC

cd /home/tux/studiECF2023_Fredj_Corentin
# Installation of npm package
apt install npm
# Updating ingoring packages from git
npm install
# Installing postgresql
apt-get install postgresql
# I set up a new user tux into psql and give it "login" and "superuser" role
# I also modifiy the password for postgres to "psqlpsw"