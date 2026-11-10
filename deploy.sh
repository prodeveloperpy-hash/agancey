#!/usr/bin/env bash
set -eu

# cPanel may run this script with cwd = $HOME, not the repo root.
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

DEPLOY_PATH="${HOME}/public_html"

if [ ! -f dist/index.html ] || [ ! -f dist/assets/app.js ] || [ ! -f dist/assets/app.css ]; then
  echo "ERROR: dist/ is incomplete in ${REPO_ROOT}" >&2
  ls -la dist dist/assets 2>&1 || true
  exit 1
fi

echo "Publishing ${REPO_ROOT}/dist/ to ${DEPLOY_PATH}..."
mkdir -p "${DEPLOY_PATH}/assets"
rm -rf "${DEPLOY_PATH:?}"/*
cp -a dist/. "${DEPLOY_PATH}/"

# Bust StackCDN/browser cache after deploy (edge previously cached index.html as app.js).
BUILD_TAG="$(git rev-parse --short HEAD 2>/dev/null || date +%Y%m%d%H%M%S)"
sed -i.bak \
  -e "s|\"/assets/app.js\"|\"/assets/app.js?v=${BUILD_TAG}\"|" \
  -e "s|\"/assets/app.css\"|\"/assets/app.css?v=${BUILD_TAG}\"|" \
  "${DEPLOY_PATH}/index.html"
rm -f "${DEPLOY_PATH}/index.html.bak"

if [ ! -f "${DEPLOY_PATH}/assets/app.js" ]; then
  echo "ERROR: app.js missing after copy. Check deploy path and permissions." >&2
  ls -la "${DEPLOY_PATH}" "${DEPLOY_PATH}/assets" 2>&1 || true
  exit 1
fi

echo "Deployed: index.html + assets/app.js ($(wc -c < "${DEPLOY_PATH}/assets/app.js") bytes)"
echo "UpForge deployment completed."
