FROM ubuntu:22.04

RUN apt update && apt install -y \
    build-essential \
    cmake \
    git \
    libboost-all-dev

WORKDIR /app
COPY . .

# FORCE install Crow headers
RUN git clone https://github.com/CrowCpp/Crow.git /usr/local/include/crow

RUN chmod +x install.sh run.sh

RUN ./install.sh --release --skip-deps

RUN mkdir -p build && cd build && cmake .. && make

CMD ["./build/endee"]
