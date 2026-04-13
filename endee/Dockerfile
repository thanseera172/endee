FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# -----------------------------
# 1. INSTALL ALL REQUIRED TOOLS
# -----------------------------
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
    ca-certificates \
    clang-19 \
    clang++-19 \
    llvm \
    libssl-dev \
    libcurl4-openssl-dev

# -----------------------------
# 2. FORCE CLANG AS DEFAULT
# -----------------------------
RUN update-alternatives --install /usr/bin/cc cc /usr/bin/clang-19 100 && \
    update-alternatives --install /usr/bin/c++ c++ /usr/bin/clang++-19 100

ENV CC=clang-19
ENV CXX=clang++-19

# -----------------------------
# 3. PROJECT SETUP
# -----------------------------
WORKDIR /app
COPY . .

RUN chmod +x install.sh run.sh

# -----------------------------
# 4. RUN INSTALL SCRIPT SAFELY
# -----------------------------
RUN bash install.sh --skip-deps || true

# -----------------------------
# 5. BUILD PROJECT
# -----------------------------
RUN mkdir -p build && cd build && \
    cmake .. -DCMAKE_C_COMPILER=clang-19 -DCMAKE_CXX_COMPILER=clang++-19 && \
    make -j$(nproc)

# -----------------------------
# 6. RUN SERVER
# -----------------------------
CMD ["bash", "run.sh"]
