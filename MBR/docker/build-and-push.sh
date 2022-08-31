#!/usr/bin/env bash

MBR_INTERFACE_VERSION=1.0.2

read -p "💻 Build and push MBR-INTERFACE (version: ${MBR_INTERFACE_VERSION})? [y/N] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    docker build -t takegames/chat:mbr_interface-${MBR_INTERFACE_VERSION} --build-arg BUILD_NUMBER="$(date +%s)" -f ./docker/Dockerfile .
    docker push takegames/chat:mbr_interface-${MBR_INTERFACE_VERSION}
fi
