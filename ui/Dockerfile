#
# ---- Base Image ----
FROM node:15.3 AS base

# Create app directory
WORKDIR /opt/alexfrontend

# Install app dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json

COPY src ./src
COPY public ./public
COPY config.json ./config.json

# Build code for production
RUN npm install --only=prod


#
# --- Production Image
FROM node:15.3

WORKDIR /opt/alexfrontend

COPY --from=base /opt/alexfrontend /opt/alexfrontend

EXPOSE 8800

CMD ["npm", "run", "start"]
