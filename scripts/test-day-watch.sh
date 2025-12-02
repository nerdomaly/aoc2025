#!/bin/bash
day=$(printf "%02d" "$1")
dir="src/day${day}"

if [ -d "$dir" ]; then
  # Pass the directory to jest to only run tests in that folder
  # We use 'yarn jest' here to ensure we use the local project version
  # Add --watch to enable watch mode
  yarn jest "$dir" "${@:2}" --watch
else
  echo "Error: Directory not found for day $1: $dir"
  exit 1
fi
