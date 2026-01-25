#! /usr/bin/bash

podman build -t bunsite:latest -f Dockerfile

podman run -d -p 3000:3000 bunsite:latest

