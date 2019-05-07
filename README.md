# GEEK4GEEK

> Nuxt.js project

## Build Setup


### Install dependencies
```
npm install # Or yarn install
```

### Serve with hot reload at localhost:3000
```
npm run dev
```

### Build for production and launch server
```
npm run build
npm start
```
### Generate static project
```
npm run generate
```
## Build Setup on Docker


### Create docker image gee4geek

### dev
```
docker build -t geek4geek-dev -f docker/dev/Dockerfile .
```

### prod
```
docker build -t geek4geek -f docker/prod/Dockerfile . 
```

### Run project on container

### dev
```
docker run -p 4000:5000 -v $(pwd):/usr/src/nuxt-app -t geek4geek-dev
```
### prod
```
docker run -p 4000:5000 -t geek4geek
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

See [CONTRIBUINTING.md](CONTRIBUITING.md)

