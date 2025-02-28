FROM node:18-bullseye-slim

# Install AWS CLI v2
RUN apt-get update && \
    apt-get install -y \
        curl \
        unzip \
        groff-base && \
    curl -sSL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o awscliv2.zip && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf \
        awscliv2.zip \
        aws/ \
        /var/lib/apt/lists/*

# Create non-root user and workspace
RUN useradd -m jenkins-user && \
    mkdir -p /home/jenkins-user/app && \
    chown -R jenkins-user:jenkins-user /home/jenkins-user

# Switch to non-root user
USER jenkins-user
WORKDIR /home/jenkins-user/app

# Default command
CMD ["/bin/bash"]
