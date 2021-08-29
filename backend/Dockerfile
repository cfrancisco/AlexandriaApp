#
# ---- Base Image ----

FROM node:15.3-alpine AS base

WORKDIR /opt/alexbackend

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --only=prod

COPY app ./app
COPY config.json ./config.json
COPY index.js ./index.js

#
# --- Production Image


FROM node:15.3-alpine

WORKDIR /opt/alexbackend

COPY --from=base /opt/alexbackend /opt/alexbackend

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["npm", "run", "start"]
