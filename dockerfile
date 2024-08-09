FROM node:20.11.0

RUN mkdir -p /app

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .

RUN yarn set version 4.3.1
RUN yarn workspaces focus --production

COPY src/ src/

ENV PORT=4000
ENV HOST=localhost
ENV API_URL=https://api.hnpwa.com/v0/

EXPOSE ${PORT}

ENTRYPOINT [ "yarn", "start" ]