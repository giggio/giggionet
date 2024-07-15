#!/usr/bin/env bash

set -euo pipefail

diff_files=`git diff --name-only --cached --ignore-submodules=all --diff-filter=ACM`
if [ -z "$diff_files" ]; then
  exit 0
fi
content_files=$(find $diff_files \( -name '*.md' \))
all_files=`echo -e "$content_files" | sort | uniq`
if [ -z "$all_files" ]; then
  echo "No markdown files found to check."
  exit 0
fi
echo "Running markdownlint-cli2 on the following files:"
echo "$all_files"
markdownlint-cli2 --no-globs $all_files
