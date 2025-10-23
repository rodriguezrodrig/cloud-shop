# Build Stage
FROM node:22-alpine AS build
WORKDIR /app
COPY *.json ./
COPY *.ts ./
RUN npm install
COPY . .
RUN npm run build
RUN ls
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]