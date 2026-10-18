#!/usr/bin/env bash
# Fails if any GitHub release asset linked from the given page does not exist.
# Usage: check-downloads.sh _site/score/download.html
set -euo pipefail

page="${1:?usage: $0 <built html page>}"
urls=$(grep -oE 'https://github\.com/[^"]+/releases/download/[^"]+' "$page" | sort -u)

if [ -z "$urls" ]; then
  echo "No release download links found in $page"
  exit 1
fi

failed=0
for url in $urls; do
  code=$(curl -s -o /dev/null -I -L --max-time 30 -w '%{http_code}' "$url")
  if [[ "$code" =~ ^(2|3) ]]; then
    echo "ok   $code $url"
  else
    echo "FAIL $code $url"
    failed=1
  fi
done

exit $failed
