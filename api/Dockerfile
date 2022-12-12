FROM node:14.18.1
WORKDIR /home/nodexpress/restapi
COPY emre-commerce-api /home/nodexpress/restapi
RUN npm install
CMD npm start
EXPOSE 5000

# cd api
# docker build --tag node-rest-api . => 1
# docker images
# docker run -p 5001:5000 node-rest-api => 2
# docker kill <id> => 3