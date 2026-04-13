# =========================
# Build Stage
# =========================
FROM ubuntu:22.04 AS builder

ENV DEBIAN_FRONTEND=noninteractive

# Install build dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    git \
    curl \
    unzip \
    pkg-config \
    libboost-all-dev \
    libssl-dev \
    libcurl4-openssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy project
COPY . .

# Install Crow manually (more stable than install.sh)
RUN git clone https://github.com/CrowCpp/Crow.git /tmp/crow && \
    cp -r /tmp/crow/include/crow /usr/local/include/

# Make scripts executable
RUN chmod +x install.sh run.sh

# Build project
RUN mkdir -p build && cd build && \
    cmake .. && \
    make -j$(nproc)


# =========================
# Runtime Stage
# =========================
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Runtime dependencies only
RUN apt-get update && apt-get install -y \
    libssl3 \
    libcurl4 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy built binary + frontend + required runtime files
COPY --from=builder /app/build/endee /app/endee
COPY --from=builder /app/frontend /app/frontend

# Ensure data directory exists
RUN mkdir -p /tmp/data

# Environment defaults (Render overrides these)
ENV NDD_DATA_DIR=/tmp/data
ENV NDD_AUTH_TOKEN=

# Expose port (Render uses this)
EXPOSE 8080

# Run server
CMD ["./endee"]
