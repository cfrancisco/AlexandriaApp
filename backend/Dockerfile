#
# ---- Base Image ----

FROM node:15.3-alpine AS base

WORKDIR /opt/albackend

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --only=prod

COPY app ./app
COPY config ./config
COPY index.js ./index.js

#
# --- Production Image


FROM node:15.3-alpine

WORKDIR /opt/albackend
 
COPY --from=base /opt/albackend /opt/albackend

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["npm", "run", "start"]
 