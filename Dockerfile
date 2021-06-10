FROM node:12

WORKDIR /subscriptionservice

COPY package*.json ./

RUN npm install

COPY . /subscriptionservice

CMD [ "npm", "run", "start:dev" ]