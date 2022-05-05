FROM node:14-alpine

# Create app directory

WORKDIR /usr/src/Question/app

# Install app dependencies

# A wildcard is used to ensure both package.json AND package-lock.json are copied

# where available (npm@5+)

COPY package*.json ./

RUN npm install && npm install typescript -g

# If you are building your code for production

# RUN npm ci --only=production

# Bundle app source

COPY . .

EXPOSE 1337

RUN tsc

CMD [ "npm", "run", "dev" ]