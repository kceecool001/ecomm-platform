FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./

RUN addgroup -S app && adduser -S -G app app && \
    chown -R app:app /app

USER app

EXPOSE 8003

CMD ["npm", "start"]