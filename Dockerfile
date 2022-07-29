# Install dependencies
FROM node:lts-alpine as DEPS

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts-alpine as BUILDER

ENV NODE_ENV production
WORKDIR /opt/app
COPY . .
COPY --from=DEPS /opt/app/node_modules ./node_modules
RUN yarn build

FROM node:lts-alpine AS RUNNER

ARG X_TAG
WORKDIR /opt/app
ENV NODE_ENV=production
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules

CMD ["node_modules/.bin/next", "start:dev"]