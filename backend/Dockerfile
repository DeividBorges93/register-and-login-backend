FROM node:16-alpine

WORKDIR /backend

COPY package.json .

RUN npm install --silent

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "start"]
