FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]