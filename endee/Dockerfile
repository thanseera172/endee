FROM ubuntu:22.04

RUN apt update && apt install -y \
    build-essential \
    cmake \
    git

WORKDIR /app
COPY . .

RUN chmod +x install.sh run.sh

# IMPORTANT: pass proper build mode
RUN ./install.sh --release --skip-deps

# build explicitly (VERY IMPORTANT)
RUN mkdir -p build && cd build && cmake .. && make

# tell Render what to run
CMD ["./build/endee"]
