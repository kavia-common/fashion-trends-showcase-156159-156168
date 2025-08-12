#!/bin/bash
cd /home/kavia/workspace/code-generation/fashion-trends-showcase-156159-156168/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

