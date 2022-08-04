FROM node:18
WORKDIR /likedapi
COPY package.json ./
RUN npm install
COPY . ./
CMD ["node", "server"]
EXPOSE 6000