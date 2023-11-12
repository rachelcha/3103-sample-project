FROM node:18-alpine
WORKDIR /src
COPY ./src ./src
COPY ./public ./public
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
RUN npm install --ignore-scripts
EXPOSE 3000
CMD [ "npm", "run", "start" ]