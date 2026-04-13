FROM ubuntu:22.04

# Install required system tools
RUN apt update && apt install -y \
    build-essential \
    cmake \
    git \
    curl \
    unzip \
    libboost-all-dev \
    libssl-dev \
    libcurl4-openssl-dev

# Set working directory
WORKDIR /app

# Copy project
COPY . .

# Make scripts executable
RUN chmod +x install.sh run.sh

# Build everything (install deps + Crow + compile)
RUN ./install.sh

# Expose port (optional but recommended for backend servers)
EXPOSE 8080

# Run compiled binary
CMD ["./build/endee"]
