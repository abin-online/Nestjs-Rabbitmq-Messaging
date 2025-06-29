# 📨 Real-Time Client-to-Client Messaging using RabbitMQ

A NestJS-based microservice system where Client A and Client B communicate through RabbitMQ queues with support for manual acks, durable queues, retry logic, and DLQ.

## 🚀 Features
- Client A → Client B (and vice versa)
- Durable queues
- Manual message acknowledgment
- Retry on failure
- Dead-letter queue setup
- Dockerized RabbitMQ
- Postman-ready REST endpoints

## 🛠 Tech Stack
- NestJS
- RabbitMQ
- Docker / Docker Compose
- Postman (for testing)

## 📦 How to Run Locally

```bash
# Clone repo
git clone <repo-url>
cd nestjs-rabbitmq-messaging

# Start RabbitMQ
cd BACKEND
docker-compose up -d

# Run NestJS service
npm install
npm run start:dev
