# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest AS base
WORKDIR /usr/src/app

COPY dist /usr/src/app/dist

# install dependencies into temp directory
# this will cache them and speed up future builds
# FROM base AS install
# RUN mkdir -p /temp/dev
# COPY package.json bun.lock /temp/dev/
# RUN cd /temp/dev && bun install --frozen-lockfile

# RUN pwd
# RUN ls

# run the app
# USER bun
# EXPOSE 3000/tcp
EXPOSE 3000
CMD [ "bunx", "serve", "dist" ]