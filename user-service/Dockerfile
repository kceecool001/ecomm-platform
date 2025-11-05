# Use official Node.js LTS image with smaller footprint
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --only=production; else npm install --only=production; fi

# Copy only necessary files
COPY src/ ./src
COPY config/ ./config

# Use non-root user for better security
RUN addgroup app && adduser -S -G app app
USER app

# Expose port
EXPOSE 8001

# Start the app
CMD ["node", "src/index.js"]
