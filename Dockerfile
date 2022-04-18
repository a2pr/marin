FROM node:17-alpine

WORKDIR app/

COPY package.json .

RUN npm install

COPY server.js .

CMD ["npm", "run", "serve"]