FROM node:20
WORKDIR /app
RUN npm install -g hyakunin-isshu
ENTRYPOINT ["npx", "hyakunin-isshu"]
