# Use a Debian-based Node.js image to enable apt
ARG NODE_IMAGE=node:22

# Base stage
FROM $NODE_IMAGE AS base
# Update apt and install dumb-init using apt
RUN apt-get update && apt-get install -y dumb-init && rm -rf /var/lib/apt/lists/*
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
RUN mkdir tmp

# Dependencies stage
FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

# Build stage
FROM dependencies AS build
RUN node ace build --production

# Production stage
FROM base AS production
ENV NODE_ENV=production
ENV PORT=$ADONIS_PORT
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
COPY --chown=node:node --from=build /home/node/app/build .
EXPOSE $PORT
USER node
CMD ["dumb-init", "node", "server.js"]
