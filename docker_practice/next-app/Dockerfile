#Base image (OS)

FROM node:18-alpine

#working directory for the app

WORKDIR /app

#copy the code from host to container to create the app

COPY . .
#COPY . .

#install all the packages/libraries using RUN command

RUN npm install

RUN npm run build

#Expose the poet

EXPOSE 3000

#serve the project using CMD ["servinf command","file name"] or ENTRYPOINT

CMD ["npm" , "start"]
