FROM node:18
WORKDIR /playlistapi
COPY package.json ./
RUN npm install
COPY . ./
CMD ["node", "server"]
EXPOSE 9000