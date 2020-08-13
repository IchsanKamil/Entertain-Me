FROM node:12.0-alpine

WORKDIR /var/www/services-movies

ENV PORT=3001

ENV DATABASE_NAME=EntertainMe

ENV COLLECTION_NAME=Movies

COPY package.json package-lock.json ./

RUN npm i -g nodemon

RUN npm i && npm cache clean --force

COPY . .

CMD ["nodemon", "app.js"]