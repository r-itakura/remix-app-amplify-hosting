#!/bin/bash

sudo rm -rf ./.amplify-hosting

sudo mkdir -p ./.amplify-hosting/compute/default

sudo cp -r ./build ./.amplify-hosting/compute/default/build
sudo cp -r server.js ./.amplify-hosting/compute/default
sudo cp -r bin/package.json ./.amplify-hosting/compute/default
sudo cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

sudo cp -r public ./.amplify-hosting/static

sudo cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json