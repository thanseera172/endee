#!/usr/bin/env bash
set -euo pipefail

log()   { printf "[INFO] %s\n" "$*"; }
error() { printf "[ERROR] %s\n" "$*" >&2; }

########################################
# DEFAULT CONFIG
########################################
BINARY_FILE="./build/endee"

NDD_DATA_DIR="./data"
NDD_AUTH_TOKEN=""

########################################
# HELP
########################################
print_help() {
    cat <<EOF
Usage: $(basename "$0") [OPTIONS]

Options:
  ndd_data_dir=DIR     Set data directory (default: ./data)
  ndd_auth_token=TOKEN Set auth token (default: empty)
  --help, -h           Show help

Description:
  Runs the compiled endee backend server.
EOF
}

########################################
# ARG PARSING
########################################
main() {

    for ARG in "$@"; do
        case "$ARG" in
            ndd_data_dir=*)
                NDD_DATA_DIR="${ARG#*=}"
                ;;
            ndd_auth_token=*)
                NDD_AUTH_TOKEN="${ARG#*=}"
                ;;
            --help|-h)
                print_help
                exit 0
                ;;
        esac
    done

    ########################################
    # VALIDATE BINARY
    ########################################
    if [[ ! -f "$BINARY_FILE" ]]; then
        error "Binary not found: $BINARY_FILE"
        error "Make sure project is built successfully"
        exit 1
    fi

    ########################################
    # EXPORT ENV (IMPORTANT FOR C++)
    ########################################
    export NDD_DATA_DIR
    export NDD_AUTH_TOKEN

    ########################################
    # RENDER COMPATIBILITY (PORT FIX)
    ########################################
    export PORT=${PORT:-8080}

    log "Starting Endee Server..."
    log "Binary: $BINARY_FILE"
    log "DATA_DIR: $NDD_DATA_DIR"
    log "AUTH_TOKEN: ${NDD_AUTH_TOKEN:+SET}"

    ########################################
    # RUN SERVER
    ########################################
    exec "$BINARY_FILE"
}

main "$@"
