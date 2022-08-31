FROM node:16-buster as installer

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY ./ ./

RUN npm run build

EXPOSE 3043

CMD "npm" "start"
