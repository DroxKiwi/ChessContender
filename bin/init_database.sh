#!/bin/bash

set -o errexit -o nounset -o xtrace -o pipefail
source ../.env.dev
systemctl restart postgresql
createdb chesscontenderDB
cd ../Models
node init_models.js
cd ../Fixtures
node load.js