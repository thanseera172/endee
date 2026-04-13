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

WORKDIR /app

# Copy project
COPY . .

# Install Crow (required for your server)
RUN git clone https://github.com/CrowCpp/Crow.git /tmp/crow && \
    cp -r /tmp/crow/include/crow /usr/local/include/

# Make scripts executable (optional but safe)
RUN chmod +x install.sh run.sh || true

# =========================
# BUILD YOUR PROJECT (FIXED)
# =========================
RUN mkdir -p build && cd build && \
    cmake /app && \
    make -j$(nproc)


# =========================
# Runtime Stage
# =========================
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# Runtime libraries only
RUN apt-get update && apt-get install -y \
    libssl3 \
    libcurl4 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy binary
COPY --from=builder /app/build/endee /app/endee

# Copy frontend (React build)
COPY --from=builder /app/frontend /app/frontend

# Data directory (Render-safe)
RUN mkdir -p /tmp/data

# Environment variables (Render overrides these)
ENV NDD_DATA_DIR=/tmp/data
ENV NDD_AUTH_TOKEN=

# Render port
EXPOSE 8080

# Start server
CMD ["./endee"]
