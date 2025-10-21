# Node.js REST service

## Install `yarn`

```bash
npm install -g yarn
```

## Build and run

```bash
yarn
yarn build
yarn start
```

## Build Docker image and run

```bash
docker build -t node-rest-service .
docker run --name node-rest-service -p 3000:3000 -d node-rest-service
```

or (2)

```bash
docker compose up -d
```

## Network address

http://localhost:3000/greeting?name=your_name

## Stop docker container

```bash
docker container rm -f node-rest-service
```

or (2)

```bash
docker compose down
```
