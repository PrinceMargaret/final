FROM node:18
WORKDIR /authentication
COPY package.json ./
RUN npm install
COPY . ./
CMD ["node", "server"]
EXPOSE 8000