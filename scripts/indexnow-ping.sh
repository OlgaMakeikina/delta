#!/usr/bin/env bash
# IndexNow ping — отправить sitemap в Яндекс и Bing.
# Запускается из git post-merge hook на сервере (см. CLAUDE.md).
# Локальный запуск: bash scripts/indexnow-ping.sh
set -euo pipefail

HOST="deltacompany.ru"
KEY="065c0eb8883a44ce87991b23b07fbd30"
KEY_LOC="https://${HOST}/${KEY}.txt"

URLS=(
  "https://${HOST}/"
  "https://${HOST}/#about_company"
  "https://${HOST}/#objects"
  "https://${HOST}/#documents"
  "https://${HOST}/#news"
  "https://${HOST}/#contacts"
)

JSON=$(python3 -c "
import json, sys
print(json.dumps({
  'host': '${HOST}',
  'key': '${KEY}',
  'keyLocation': '${KEY_LOC}',
  'urlList': $(printf '%s\n' "${URLS[@]}" | python3 -c 'import sys,json; print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')
}))
")

for endpoint in "https://yandex.com/indexnow" "https://api.indexnow.org/indexnow"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -X POST -H "Content-Type: application/json" "$endpoint" -d "$JSON")
  echo "[$(date +%Y-%m-%dT%H:%M:%S)] $endpoint → HTTP $code"
done
