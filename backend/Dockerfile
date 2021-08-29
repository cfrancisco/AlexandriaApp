#
# ---- Base Image ----
FROM node:15.3-alpine AS base

# Create app directory
WORKDIR /opt/alexbackend

# Install app dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json

COPY app ./app
COPY config.json ./config.json
COPY index.js ./index.js

# Build code for production
RUN npm install --only=prod

#
# --- Production Image
FROM node:15.3-alpine

WORKDIR /opt/alexbackend

COPY --from=base /opt/alexbackend /opt/alexbackend

EXPOSE 3000

CMD ["npm", "run", "start"]
