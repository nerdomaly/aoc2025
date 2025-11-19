#!/bin/bash
day=$(printf "%02d" "$1")
file="src/day${day}/index.ts"
if [ -f "$file" ]; then
  ts-node "$file" "${@:2}"
else
  echo "Error: File not found for day $1: $file"
  exit 1
fi
