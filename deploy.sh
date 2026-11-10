#!/usr/bin/env bash
set -eu

DEPLOY_PATH="${HOME}/public_html}"

if [ ! -f dist/index.html ] || [ ! -f dist/assets/app.js ]; then
  echo "ERROR: dist/ is incomplete. On your PC run: npm run build — then commit dist/ and push before deploy." >&2
  exit 1
fi

echo "Publishing dist/ to ${DEPLOY_PATH}..."
mkdir -p "${DEPLOY_PATH}"
rm -rf "${DEPLOY_PATH:?}"/*
cp -R dist/. "${DEPLOY_PATH}/"

echo "UpForge deployment completed."
