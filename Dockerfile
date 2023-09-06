FROM node:18

WORKDIR /react-cotizador
# COPY package.json .
# RUN npm install

EXPOSE 5173

COPY . .
# CMD npm start