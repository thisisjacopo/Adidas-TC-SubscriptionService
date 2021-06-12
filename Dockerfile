FROM node:12

WORKDIR /subscriptionservice

COPY package*.json ./

RUN npm install

COPY . /subscriptionservice

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]