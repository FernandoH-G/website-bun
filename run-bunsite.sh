#! /usr/bin/bash

bun run build

podman build -t bunsite:latest .

podman run -d -p 3000:3000 bunsite:latest

