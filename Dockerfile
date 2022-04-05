FROM node:lts-alpine
WORKDIR /usr/src
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && npm install --global gatsby-cli && mkdir /usr/src/app && gatsby telemetry --disable
WORKDIR /usr/src/app
EXPOSE 8000
CMD gatsby develop -H 0.0.0.0
