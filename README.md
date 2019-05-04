# GEEK4GEEK

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
## Build Setup on Docker

``` bash
# create docker image gee4geek
# dev
$ docker build -t geek4geek -f docker/dev/Dockerfile . 

# prod
$ docker build -t geek4geek-dev -f docker/prod/Dockerfile .

# run project on container
# dev
$ docker run -p 4000:5000 -v $(pwd):/usr/src/nuxt-app -t geek4geek-dev

# prod
$ docker run -p 4000:5000 -t geek4geek


```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

See [CONTRIBUINTING.md](CONTRIBUITING.md)

