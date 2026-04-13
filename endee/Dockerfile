FROM ubuntu:22.04

RUN apt update && apt install -y \
    build-essential \
    cmake \
    git

WORKDIR /app
COPY . .

RUN chmod +x install.sh run.sh

RUN ./install.sh || true

CMD ["bash", "run.sh"]
