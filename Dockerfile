# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest AS base
WORKDIR /usr/src/app

COPY dist /usr/src/app/dist

EXPOSE 3000
CMD [ "bunx", "serve", "dist" ]