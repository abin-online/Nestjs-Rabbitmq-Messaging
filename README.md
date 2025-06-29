# 📨 Real-Time Client-to-Client Messaging using RabbitMQ (NestJS)

A simple, real-time messaging service built with **NestJS** and **RabbitMQ** to simulate communication between two clients (Client A & Client B) using message queues. This project was developed as part of a technical task to demonstrate microservice communication patterns using RabbitMQ.

---

## 🚀 Live Demo

- 🔗 **Hosted Backend**: [https://nestjs-rabbitmq-messaging.onrender.com](https://nestjs-rabbitmq-messaging.onrender.com)
- 📬 **Postman API Collection**: [API Docs via Postman](https://documenter.getpostman.com/view/33673831/2sB2xFg83o)

---

## 🧠 Features

- ✅ **Client A to Client B Messaging**  
- ✅ **Client B to Client A Messaging (Two-way Communication)**  
- ✅ **RabbitMQ Integration via amqplib**  
- ✅ **Durable Queues**  
- ✅ **Manual Acknowledgement Handling (ack/nack)**  
- ✅ **Basic Retry Logic**  
- ✅ **No Frontend Needed (API-based only)**

---

## ⚙️ Tech Stack

| Tech              | Purpose                          |
|-------------------|----------------------------------|
| NestJS            | Backend framework                |
| RabbitMQ          | Message broker                   |
| amqplib           | Communication with RabbitMQ      |
| Docker + Compose  | Local RabbitMQ environment       |
| Render            | Cloud Hosting (for backend)      |
| Postman           | API Documentation & Testing      |

---

## 🏗️ System Design Overview

```

\[ Client A ]
|
\| POST /client-a/send
↓
\[RabbitMQ Queue: to-clientB]
↓
\[Client B Microservice Consumer]
|
\| POST /client-b/send (optional)
↓
\[RabbitMQ Queue: to-clientA]
↓
\[Client A Microservice Consumer]

````

- Each client acts as both a **publisher** and a **consumer**.
- Separate queues are used for each direction of communication.
- Durable queue setup ensures message persistence.
- Manual acknowledgements (`ack`/`nack`) are used to confirm or retry processing.

---

## 🐳 Local Development Setup

### 1. Clone the repo

```bash
git clone https://github.com/abin-online/Nestjs-Rabbitmq-Messaging.git
cd Nestjs-Rabbitmq-Messaging/BACKEND
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start RabbitMQ via Docker

```bash
docker-compose up -d
```

This runs RabbitMQ locally with management panel on [http://localhost:15672](http://localhost:15672)
(Default credentials: guest / guest)

### 4. Run the NestJS app

```bash
npm run start:dev
```

---

## 📦 API Endpoints

The API is fully documented in Postman:

🔗 [Postman Docs](https://documenter.getpostman.com/view/33673831/2sB2xFg83o)

Includes:

* `/client-a/send` → Sends message to Client B
* `/client-b/send` → Sends message to Client A

---

## 📁 Project Highlights

* All message queues are **durable**, ensuring no loss on broker restart.
* **Manual ack/nack** allows retry logic and Dead-Letter Queue (DLQ) integration.
* Separate microservice receivers for `to-clientA` and `to-clientB`.
* **Bonus Implemented**: Two-way client messaging ✅
* Project modularized using NestJS **Clean Structure**.

---

## 📹 Demo Video

🎥 *A demo walkthrough of this app is recorded and available upon request or submission.*

---

## 📚 References

* [NestJS Docs](https://docs.nestjs.com/microservices/basics)
* [RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
* [amqplib](https://www.npmjs.com/package/amqplib)

---

## 🧑‍💻 Author

**Abin Babu**
💼 Full-stack Developer | MERN & Microservices
🌐 [GitHub](https://github.com/abin-online)

---

> Built with ❤️ for real-time systems and message-driven architecture.

```

---

Let me know if you want to include badges, flow diagrams, or Docker tips too. This doc is ready for upload as your `README.md`. 💪📘
```
