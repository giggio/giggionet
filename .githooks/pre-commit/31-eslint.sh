#!/usr/bin/env bash

set -euo pipefail

# get all files that have been changed and are staged
diff_files=`git diff --name-only --cached --ignore-submodules=all --diff-filter=ACM`
if [ -z "$diff_files" ]; then
  exit 0
fi
content_files=$(find $diff_files \( -name '*.js' -or -name '*.mjs' \))
all_files=`echo -e "$content_files" | sort | uniq`
if [ -z "$all_files" ]; then
  echo "No files found to check with eslint."
  exit 0
fi
echo "Running eslint on the following files:"
echo "$all_files"
npm run eslint -- --max-warnings=0 $all_files
