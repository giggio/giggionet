#!/usr/bin/env bash

set -euo pipefail

# get all files that have been changed and are staged
diff_files=`git diff --name-only --cached --ignore-submodules=all --diff-filter=ACM`
if [ -z "$diff_files" ]; then exit 0; fi
content_files=$(find $diff_files \( -name '*.md' -or -name '*.html' -or -name '*.scss' \))
all_files=`echo -e "$content_files" | sort | uniq`
if [ -z "$all_files" ]; then
  echo "No files found to check"
  exit 0
fi
echo "Running prettier on the following files:"
prettier --write $all_files
