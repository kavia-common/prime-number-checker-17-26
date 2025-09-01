#!/bin/bash
cd /home/kavia/workspace/code-generation/prime-number-checker-17-26/prime_number_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

