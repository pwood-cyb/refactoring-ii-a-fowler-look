FROM oven/bun:1-debian AS base

WORKDIR /app

COPY . .

RUN bun install
