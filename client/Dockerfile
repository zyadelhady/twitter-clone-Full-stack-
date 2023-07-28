FROM node:12.0.0 as builder

WORKDIR '/app'

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci 

COPY ./ ./

RUN npm run build

ENTRYPOINT tail -f
