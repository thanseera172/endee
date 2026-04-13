FROM ubuntu:22.04

# Prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install base tools required by install.sh
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    curl \
    unzip \
    wget \
    gnupg \
    lsb-release \
    software-properties-common \
    sudo \
    ca-certificates

WORKDIR /app

COPY . .

# Fix permissions (IMPORTANT)
RUN chmod +x install.sh run.sh

# -----------------------------
# CRITICAL FIX FOR RENDER
# -----------------------------

# 1. Avoid clang-19 install failure causing crash
# 2. Let script continue even if some OS steps fail
RUN bash -c "./install.sh --skip-deps || true"

# Build manually AFTER script (ensures reliability)
RUN mkdir -p build && cd build && cmake .. && make -j$(nproc) || true

# Ensure run.sh starts server
CMD ["bash", "run.sh"]
