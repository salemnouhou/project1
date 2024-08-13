FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3004
CMD ["npm", "start"]
# docker build -t express-app .
# docker run -d -p 3004:3004 --name express-container express-app
