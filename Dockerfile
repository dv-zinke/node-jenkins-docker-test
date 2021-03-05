FROM node:12

WORKDIR /var/jenkinshome/workspace/node-test

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4141
CMD [ "node" , "index.js" ]