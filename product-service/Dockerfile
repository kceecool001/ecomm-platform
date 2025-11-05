FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi
COPY . .
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN addgroup -S app && adduser -S -G app app && \
    chown -R app:app /app
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8002/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
EXPOSE 8002
CMD ["node", "src/index.js"]
