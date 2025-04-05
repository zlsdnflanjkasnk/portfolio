# Step 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /bao_yuwei_final_site

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Step 2: Serve using Nginx
FROM nginx:alpine AS production

WORKDIR /bao_yuwei_final_site

COPY --from=build /bao_yuwei_final_site/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
