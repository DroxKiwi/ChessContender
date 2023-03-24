set -o errexit -o nounset -o xtrace -o pipefail

# Installation of npm package
apt install npm

# Installing postgresql
apt-get install postgresql