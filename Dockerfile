FROM node:16-alpine

RUN apk add --no-cache build-base python3

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]