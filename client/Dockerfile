FROM node:12.2.0-alpine as build
WORKDIR /app
COPY . /app/
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build
EXPOSE 3000
CMD npm start