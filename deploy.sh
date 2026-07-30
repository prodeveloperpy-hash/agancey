#!/usr/bin/env bash
set -eu

echo "Installing production dependencies..."
npm ci

echo "Building the UpForge website..."
npm run deploy

DEPLOY_PATH="${HOME}/public_html"
echo "Publishing dist to ${DEPLOY_PATH}..."
mkdir -p "${DEPLOY_PATH}"
cp -R dist/. "${DEPLOY_PATH}/"

echo "UpForge deployment completed."
