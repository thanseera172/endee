#!/usr/bin/env bash
set -euo pipefail

log() { printf "[INFO] %s\n" "$*"; }

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

########################################
# BUILD ONLY (SAFE FOR DOCKER)
########################################
build_project() {
    local build_dir="${script_dir}/build"

    log "Cleaning build directory..."
    rm -rf "$build_dir"
    mkdir -p "$build_dir"
    cd "$build_dir"

    log "Running CMake..."
    cmake ..

    log "Building..."
    make -j"$(nproc)"
}

########################################
# FRONTEND (SAFE)
########################################
add_frontend() {
    VERSION="v1.6.1"

    log "Downloading frontend..."
    mkdir -p "$script_dir/frontend"
    cd "$script_dir/frontend"

    curl -fL -o dist.zip \
        "https://github.com/EndeeLabs/endee-web-ui/releases/download/${VERSION}/dist.zip"

    unzip -o dist.zip
    rm -f dist.zip
}

########################################
# MAIN
########################################
main() {
    build_project
    add_frontend
}

main "$@"
