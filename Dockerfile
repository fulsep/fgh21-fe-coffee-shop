FROM node:lts-alpine

WORKDIR /app

RUN npm install -g serve@latest

COPY package-lock.json ./package-lock.json
COPY package.json ./package.json

RUN npm install

COPY . .

ARG VITE_BACKEND_URL
RUN VITE_BACKEND_URL=${VITE_BACKEND_URL:-""} npm run build

CMD [ "serve", "-l", "tcp://0.0.0.0:3000", "-c", "../serve.json", "dist/" ]