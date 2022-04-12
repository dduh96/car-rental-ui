FROM node:14-alpine AS build

WORKDIR /app

# install app dependencies
COPY . .
RUN npm ci && npm run build

# nginx server
FROM nginx:alpine
COPY --from=build /app/dist/car-rental-ui /usr/share/nginx/html
EXPOSE 80
