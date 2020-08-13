FROM node:12.0-alpine

WORKDIR /var/www/orchestrator

ENV PORT=3000

ENV DATABASE_NAME=EntertainMe

ENV MOVIES_SERVICES_PATH=http://movies:3001/movies

ENV TV_SERIES_SERVICES_PATH=http://tv:3002/tv_series

COPY package.json package-lock.json ./

RUN npm i -g nodemon

RUN npm i && npm cache clean --force

COPY . .

CMD ["nodemon", "app.js"]