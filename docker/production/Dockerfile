FROM node:20-alpine

# Installing system dependencies for sharp compatibility
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    && rm -rf /var/cache/apk/*

# Define environment variable for build-time and runtime
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/

# Copy dependencies and install only necessary packages
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --production && npm prune --production

# Set working directory for the application
WORKDIR /opt/app
COPY . .

# Ensure correct permissions for the application directory
RUN chown -R node:node /opt/app
USER node

# Build the application
RUN npm run build

# Expose application port
EXPOSE 1337

# Run Strapi in production mode
CMD ["npm", "run", "start"]