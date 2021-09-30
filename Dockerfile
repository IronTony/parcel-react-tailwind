# => Build container
FROM node:alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

# => Run container
FROM nginx:stable-alpine

# Add bash
RUN apk add --no-cache bash

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /app/dist /usr/share/nginx/html/

# Set workdir
WORKDIR /usr/share/nginx

# Copy shell script to container
COPY ./env.sh .

# Copy .env file to container
COPY .env ./envfile

# Make our shell script executable
RUN chmod +x env.sh

# Default port exposure
EXPOSE 80

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/env.sh /usr/share/nginx/envfile /usr/share/nginx/html/env.js && nginx -g \"daemon off;\""]
