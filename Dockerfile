FROM node:20.13.1-bookworm

WORKDIR /app

ENV NODE_ENV=production

RUN npm i -g pnpm@8

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

COPY src ./src

CMD ["pnpm", "start"]