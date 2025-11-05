FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .

EXPOSE 8003
CMD ["npm", "start"]