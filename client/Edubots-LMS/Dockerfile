# Name the node stage "builder"
FROM node:20-alpine AS builder
# Set working directory
WORKDIR /client
# Copy all files from current directory to working dir in image
COPY package*.json /client/
# install node modules and build assets
#RUN npm i && npm run build


COPY . /client/
# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
#COPY --from=builder / .
COPY --from=builder /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]