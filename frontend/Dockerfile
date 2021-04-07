# multi build phase Docker file: build phase and run phase 

# build phase
FROM node:alpine
WORKDIR '/app'
COPY package.json . 
RUN npm install
COPY . . 
RUN npm run build

# run phase
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
