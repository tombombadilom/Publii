#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# pnpm
export PNPM_HOME="/home/tom/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"

echo "##    set nodejs version to 19"
nvm use 19
echo "##    install global libs: electron electron-packager node-gyp gulp"
pnpm i -g electron electron-packager node-gyp gulp
echo "##    install application packages"
pnpm i
cd app
pnpm i
cd ../
echo "##    libraries installed"
node-gyp rebuild
pnpm start

