FROM node:22 AS build
WORKDIR /rest-service
COPY package.json tsconfig.json .
COPY src/ src/
RUN yarn && yarn build

FROM node:22
WORKDIR /rest-service
COPY --from=build /rest-service/dist/ dist/
COPY --from=build /rest-service/node_modules/ node_modules/
EXPOSE 3000
CMD ["node","dist/server.js"]
