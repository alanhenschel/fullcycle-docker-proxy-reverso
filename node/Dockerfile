FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install
COPY ./server.js ./
COPY ./db.js ./

EXPOSE 5000

CMD ["npm","start"]