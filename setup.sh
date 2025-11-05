#!/bin/bash

# Root directory
PROJECT_ROOT="ecomm-platform"
mkdir -p $PROJECT_ROOT
cd $PROJECT_ROOT

# Microservices
SERVICES=("user-service" "product-service" "cart-service" "order-service" "payment-service" "notification-service")

# Create service folders
for SERVICE in "${SERVICES[@]}"; do
  mkdir -p $SERVICE/src
  mkdir -p $SERVICE/config
  touch $SERVICE/Dockerfile
  touch $SERVICE/README.md
done

# Infrastructure components
mkdir -p api-gateway
mkdir -p service-discovery
mkdir -p logging

# Compose file
touch docker-compose.yml

echo "✅ Project skeleton created successfully!"
