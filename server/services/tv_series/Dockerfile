FROM node:12.0-alpine

WORKDIR /var/www/services-tv

ENV PORT=3002

ENV DATABASE_NAME=EntertainMe

ENV COLLECTION_NAME=TvSeries

COPY package.json package-lock.json ./

RUN npm i -g nodemon

RUN npm i && npm cache clean --force

COPY . .

CMD ["nodemon", "app.js"]