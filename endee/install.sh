#!/usr/bin/env bash
set -euo pipefail

########################################
# Logging helpers
########################################
log()   { printf "[INFO] %s\n" "$*"; }
warn()  { printf "[WARN] %s\n" "$*" >&2; }
error() { printf "[ERROR] %s\n" "$*" >&2; }

########################################
# Globals
########################################
OS_FAMILY="unknown"
OS_ARCH="unknown"
DISTRO_ID="unknown"
DISTRO_VERSION_ID="unknown"
DISTRO_CODENAME="unknown"

BUILD_MODE="release"
CPU_TARGET=""
SKIP_DEPS=false

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

########################################
# Packages
########################################
pkg_debian_ubuntu=(cmake clang-19 build-essential libssl-dev libcurl4-openssl-dev unzip curl git)
pkg_redhat=(cmake openssl-devel libcurl-devel clang unzip curl git)
pkg_macos=(cmake unzip curl git openssl@3)

########################################
# Crow dependency FIX (ADDED)
########################################
install_crow() {
    log "Installing Crow dependency..."

    mkdir -p /usr/local/include

    if [[ ! -d /usr/local/include/crow ]]; then
        git clone https://github.com/CrowCpp/Crow.git /tmp/crow
        cp -r /tmp/crow/include/crow /usr/local/include/
    fi

    log "Crow installed successfully"
}

########################################
# Ubuntu/Debian installer
########################################
apt_install_if_missing_debian() {
    local to_install=()
    for pkg in "$@"; do
        if dpkg -s "$pkg" >/dev/null 2>&1; then
            log "Already installed: $pkg"
        else
            to_install+=("$pkg")
        fi
    done

    if ((${#to_install[@]})); then
        sudo apt-get update
        sudo apt-get install -y "${to_install[@]}"
    fi
}

install_dependencies_ubuntu_family() {
    apt_install_if_missing_debian "${pkg_debian_ubuntu[@]}"
}

install_dependencies_debian_family() {
    apt_install_if_missing_debian "${pkg_debian_ubuntu[@]}"
}

install_dependencies_redhat_family() {
    sudo dnf install -y @development-tools
    sudo dnf install -y "${pkg_redhat[@]}"
}

install_dependencies_macos() {
    for pkg in "${pkg_macos[@]}"; do
        brew install "$pkg" || true
    done
}

########################################
# Build system
########################################
get_njobs() {
    if command -v nproc >/dev/null 2>&1; then
        nproc
    else
        echo 2
    fi
}

build_project() {
    local build_dir="${script_dir}/build"

    mkdir -p "$build_dir"
    cd "$build_dir"

    rm -rf ./*

    local cmake_args=()

    case "$BUILD_MODE" in
        debug_all)
            cmake_args+=("-DND_DEBUG=ON" "-DDEBUG=ON")
            ;;
        debug_nd)
            cmake_args+=("-DND_DEBUG=ON")
            ;;
        release)
            ;;
        *)
            error "Invalid build mode"
            exit 1
            ;;
    esac

    if [[ -n "$CPU_TARGET" ]]; then
        case "$CPU_TARGET" in
            avx2) cmake_args+=("-DUSE_AVX2=ON") ;;
            avx512) cmake_args+=("-DUSE_AVX512=ON") ;;
            neon) cmake_args+=("-DUSE_NEON=ON") ;;
            sve2) cmake_args+=("-DUSE_SVE2=ON") ;;
        esac
    fi

    log "Running cmake..."
    cmake "${cmake_args[@]}" ..

    log "Building project..."
    make -j"$(get_njobs)"
}

########################################
# FRONTEND
########################################
add_frontend() {
    VERSION="v1.6.1"
    log "Downloading frontend ${VERSION}"

    mkdir -p "$script_dir/frontend"
    cd "$script_dir/frontend"

    curl -fL -o react-dist.zip \
    https://github.com/EndeeLabs/endee-web-ui/releases/download/${VERSION}/dist.zip

    unzip -o react-dist.zip
    rm -f react-dist.zip
}

########################################
# MAIN FIXED FLOW
########################################
main() {

    log "Installing dependencies..."
    install_dependencies_ubuntu_family

    log "Installing Crow..."
    install_crow   # ✅ IMPORTANT FIX

    log "Building project..."
    build_project

    log "Adding frontend..."
    add_frontend

    log "Build completed successfully"
}

main "$@"
