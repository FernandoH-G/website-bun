# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.3.6-slim AS base
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

FROM base AS release
COPY --from=install /temp/dev/node_modules node_modules

# Copy everything except items listed in .dockerignore to WORKDIR
COPY . .

ARG BUN_PUBLIC_GH_API_KEY
# bun run build runs the build script in package.json.
RUN bun run build

EXPOSE 3000
CMD [ "bunx", "serve", "-s", "dist" ]