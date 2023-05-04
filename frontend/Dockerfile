FROM node:14 as build-step

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.19.2-alpine

COPY --from=build-step /app/dist/furniture-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]