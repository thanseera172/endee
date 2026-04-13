FROM ubuntu:22.04

# Install dependencies
RUN apt update && apt install -y \
    build-essential \
    cmake \
    git

WORKDIR /app

COPY . .

RUN chmod +x install.sh run.sh

RUN ./install.sh

CMD ["bash", "run.sh"]
