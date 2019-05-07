FROM node:12-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade

# copy package.json
COPY ./package.json /usr/src/nuxt-app
RUN npm install

# copy the app, not .dockerignore
COPY . /usr/src/nuxt-app

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "npm", "run", "dev" ]
