FROM node:18
WORKDIR /googleauth
COPY package.json ./
RUN npm install
COPY . ./
CMD ["node", "server"]
EXPOSE 5000