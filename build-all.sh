#!/bin/bash

set -e

REPOS=(
  "ai-shell"
  "ai-llm"
  "ai-mcp"
  "ai-rag"
  "ai-agents"
)

for repo in "${REPOS[@]}"; do
  echo ""
  echo "=============================="
  echo "Building $repo"
  echo "=============================="

  cd "$repo"
  npx nx build
  cd ..
done

echo ""
echo "All builds completed successfully!"