FROM node:17-alpine

WORKDIR app/

COPY . .

RUN npm install

COPY server.js .

CMD ["npm", "run", "serve"]