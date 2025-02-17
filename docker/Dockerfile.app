FROM node:22-alpine3.19

EXPOSE 3000

COPY apps/app /app
WORKDIR /app
RUN npm ci

USER node

# 120sec delay to demonstrate layer build cache
RUN npm run delay

CMD [ "npm", "run", "serve" ]
