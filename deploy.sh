#!/usr/bin/env bash
set -eu

echo "Building production bundle..."
npm run build

DEPLOY_PATH="${HOME}/public_html"
echo "Publishing dist to ${DEPLOY_PATH}..."
mkdir -p "${DEPLOY_PATH}"
cp -R dist/. "${DEPLOY_PATH}/"

echo "UpForge deployment completed."
