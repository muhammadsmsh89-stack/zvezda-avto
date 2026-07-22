#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export PATH="$DIR/.toolchain/node-v20.18.1-darwin-arm64/bin:$PATH"
cd "$DIR"
exec npx next dev -p 3000
