# 🚀 SocialSphere — Modern Social Media Platform

A full-stack social media platform built with scalable backend architecture.
Designed with production-level engineering concepts including authentication, timeline feeds, profile systems, replies, likes, follow mechanics, pagination, protected routes and  optimized queries.
---

# 🌍 Overview

SocialSphere is a scalable social networking platform where users can:

- Create accounts securely
- Publish posts
- Like and reply to posts
- Follow other users
- View personalized timeline feeds
- Manage profiles
- daraja api intergration


This project focuses heavily on:
- backend engineering
- scalable architecture
- API design
- authentication systems
- performance optimization
-ApI security

---

# 🛠 Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt


---

# ✨ Features

## 🔐 Authentication System
- JWT Authentication
- Protected Routes
- Login/Register
- Password Hashing with bcrypt
- Persistent Authentication
- Secure API Authorization Headers

---

## 📰 Timeline Feed
- Personalized timeline feed
- Displays posts from followed users
- Optimized database queries
- Pagination support
- Modern responsive feed UI

---

## 📝 Posts System
- Create posts
- Delete posts
- Like/unlike posts
- Reply to posts
- Nested reply rendering
- Optimized feed loading

---

## 👤 Profile System
- User profile pages
- Profile picture support
- Bio support
- Followers/following count
- User-specific posts
- Follow/unfollow mechanics

---

## ⚡ Backend Engineering
- MongoDB indexing
- Lean queries
- Pagination optimization
- Middleware architecture
- RESTful API design
- Reusable controllers
- Authentication middleware
- Error handling architecture

---



# 📂 Project Structure

```txt
socialsphere/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/codewithshadyy/socialSphere.git
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
EMAIL=your_email
EMAIL_PASS=your_app_password
```



---


````





# 🔗 API Endpoints

## Authentication

```http
POST /api/v1/creators/register
POST /api/v1/creators/login
```

---

## Posts

```http
GET    /api/v1/feeds/timeline
POST   /api/posts
PUT    /api/v1/posts/like/:id
POST   /api/v1/posts/reply/:id
DELETE /api/v1/posts/:id
```

---

## Profiles

```http
GET /api/v1/profiles/:id
GET /api/v1/profiless/me
post /api/v1/profiles/Create
```

---

## Follow System

```http
PUT /api/v1/creators/follow/:id
PUT /api/v1/creators/unfollow/:id
```

---

# 🧠 Engineering Concepts Used

This project demonstrates understanding of:

- Authentication & Authorization
- REST API Architecture
- MongoDB Relationships
- Middleware Systems
- Rate Limiting
- Password Security
- State Management
- Pagination
- Database Indexing
- Backend Optimization
- Protected Frontend Routes
- Scalable Folder Structures
- Production UI Design

---

# 📈 Future Improvements

- Real-time chat using Socket.io
- Notifications system
- Infinite scrolling
- Story feature
- Image/video uploads with Cloudinary
- Search system
- Explore recommendation algorithm
- Redis caching
- Microservices architecture


---



---



# 👨‍💻 Author

Built by a passionate software developer focused on:
- scalable backend engineering
- real-world application architecture
- social platform engineering

---

# ⭐ Why This Project Matters

This project is more than just CRUD.

It demonstrates:

- system design thinking
- scalable backend practices
- production-level development patterns

It reflects the engineering mindset used in modern social media platforms.

---

# 📬 Contact

Feel free to connect, collaborate, or discuss engineering ideas.

If you like the project, consider giving it a ⭐ on GitHub.
