FROM node:16-alpine3.15
WORKDIR /front_bibino
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]