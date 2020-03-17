FROM node:12

WORKDIR /tmp

COPY src /tmp
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
