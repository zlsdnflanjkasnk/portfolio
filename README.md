# Assignment 14

# Set up React
yarn install
yarn create react-app portfolio

# edit the app file to show the content of the assignment on the website
Edit src/app.js

# write dockerfile
# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /bao_yuwei_final_site

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install the project dependencies
RUN yarn install

# Copy the rest of the project files into the container
COPY . .

# Builds application using the script from package.json file.
RUN yarn build

# Expose the port 8083 that the app will run
EXPOSE 8083

# Serve using Nginx
FROM nginx:alpine AS production
WORKDIR /bao_yuwei_final_site

COPY --from=build /bao_yuwei_final_site/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# build image
docker build -t bao_yuwei_coding_assignment14 .

# build container on Port 5575 with correct name
docker run -d -p 5575:80 --name bao_yuwei_coding_assignment14 bao_yuwei_coding_assignment14

# run container
container runs successfully on port 5575







