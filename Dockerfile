# pull the official base image
FROM node:14-alpine

#create a working directory
RUN mkdir /app

#set as work directory
WORKDIR /app

#copy aplication dependencies
COPY ./package.json .

#install node dependencies
RUN npm install 

#add app to root directory
COPY . .

#expose container port
EXPOSE 3000

#start app
CMD npm run start