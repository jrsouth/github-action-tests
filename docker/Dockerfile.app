FROM node:22-alpine3.19

EXPOSE 3000

COPY apps/api /app
WORKDIR /app
RUN npm ci

USER node
CMD [ "npm", "run", "serve" ]
