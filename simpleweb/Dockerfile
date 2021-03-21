# specify a base image
# using the alpine tag, most stripped down version of node 
FROM node:alpine

# put the files we are using for this in usr/app inside the container 
# when you start a shell inside the container, will bring you to this location 
WORKDIR /usr/app

# so it could find package.json and index.js - copies working directory to container being created 
#  copy package.json each time first, to only install newly added npm modules
# makes re-building the container much faster
COPY ./package.json ./
# install dependencies
RUN npm install
COPY ./ ./


# default command 
CMD ["npm", "start"]