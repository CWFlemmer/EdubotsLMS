# Name the node stage "builder"
FROM node:20-alpine AS builder
# Set working directory
WORKDIR /api
# Copy all files from current directory to working dir in image
#COPY package*.json /api/
COPY package.json*.json .
# install node modules and build assets
COPY . .

CMD ["node", "index.js"]