#!/bin/bash

# Example validation hook that runs after Write/Edit operations
# This demonstrates how to validate file changes

FILE_PATH="$1"

echo "Validating file: $FILE_PATH"

# Check if file exists
if [ ! -f "$FILE_PATH" ]; then
  echo "Warning: File not found: $FILE_PATH"
  exit 0
fi

# Get file extension
EXT="${FILE_PATH##*.}"

# Perform basic validation based on file type
case "$EXT" in
  json)
    echo "Checking JSON syntax..."
    if command -v jq &> /dev/null; then
      if jq empty "$FILE_PATH" 2>/dev/null; then
        echo "✓ JSON validation passed"
      else
        echo "✗ JSON validation failed"
        exit 1
      fi
    else
      echo "ℹ jq not installed, skipping JSON validation"
    fi
    ;;
  sh)
    echo "Checking shell script syntax..."
    if bash -n "$FILE_PATH" 2>/dev/null; then
      echo "✓ Shell script syntax valid"
    else
      echo "✗ Shell script syntax error"
      exit 1
    fi
    ;;
  *)
    echo "ℹ No specific validation for .$EXT files"
    ;;
esac

echo "Validation complete"
exit 0
