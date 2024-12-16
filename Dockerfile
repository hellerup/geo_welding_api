FROM node:22 AS base

# All deps stage
FROM base AS dependencies
RUN mkdir /app
WORKDIR /app
RUN apt-get update && apt-get install -y dumb-init && rm -rf /var/lib/apt/lists/*
ADD package.json package-lock.json ./
RUN npm ci
RUN ls -la /app && echo "Listed contents of /app"

# Production only deps stage
FROM base AS production-deps
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

# Build stage
FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules /app/node_modules
ADD . .
RUN node ace build

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
EXPOSE 3333
CMD ["node", "./bin/server.js"]

# Development stage
# Development stage
FROM base AS development
RUN mkdir /app
WORKDIR /app
RUN ls -la /app && echo "Listed contents of /app after mkdir"
COPY --from=dependencies /app/node_modules /app/node_modules/
COPY --from=dependencies /app/package.json /app/
COPY --from=dependencies /app/package-lock.json /app/
ENV POSTGRES_PASSWORD=$DB_ROOT_PASSWORD \
    DB_DATABASE=$DB_DATABASE \
    DB_HOST=$DB_HOST \
    DB_USER=$DB_USER \
    DB_PORT=$DB_PORT \
    DB_PASSWORD=$DB_PASSWORD \
    POSTGRES_PASSWORD=$DB_ROOT_PASSWORD \
    NODE_ENV=$NODE_ENV \
    APP_KEY=$APP_KEY \
    HOST=$HOST \
    LOG_LEVEL=$LOG_LEVEL \
    PORT=$PORT \
    TZ=$TZ

ADD . .
RUN ls -la /app && echo "Listed contents of /app after ADD command"
EXPOSE 3333
CMD ["npm", "run", "dev"]