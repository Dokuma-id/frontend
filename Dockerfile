FROM node:18-alpine3.17

RUN set -eux; \
    apk add --no-cache --virtual build-dependencies wget unzip gnupg; \
    apk add --no-cache git python3 py-pip bash shellcheck openjdk11-jre curl musl-locales musl-locales-lang; 

# Copy the current directory into the Docker image
COPY . /submission-quality-processor 

# Set working directory for future use
WORKDIR /submission-quality-processor

# Install the dependencies from package.json
RUN npm install

ENTRYPOINT npm start