# 🛒 Grocery Delivery App

A full-stack, real-time grocery delivery app built using **Fastify**, **MongoDB**, **Mongoose**, **React Native**, **Material UI**, **JWT Auth**, and **Socket.IO**. Features Google Maps API integration for live location tracking and efficient delivery route visualization.

---

## 🚀 Tech Stack

| Technology        | Usage                                 |
|-------------------|----------------------------------------|
| **Fastify**        | High-performance backend framework     |
| **MongoDB + Mongoose** | NoSQL database and ODM for schema modeling |
| **JWT (jsonwebtoken)** | Authentication and role-based access |
| **React Native**   | Cross-platform mobile front-end       |
| **Material UI**    | Clean, responsive UI components       |
| **Socket.IO**      | Real-time communication (order status, live location) |
| **Google Maps API**| Map-based delivery tracking and geolocation |

---

## ✨ Features

- ✅ User & Delivery Partner Authentication (JWT)
- 🛍️ Browse & order groceries with cart and checkout
- 📦 Real-time order tracking using Socket.IO
- 🧭 Delivery route via Google Maps
- 🔐 Role-based access for customers, delivery partners, and admins
- 📍 Live geolocation tracking of delivery partners
- 📊 Admin dashboard with branch and order management

---

## 🗂️ Project Structure

```
📦 grocery-delivery-app/
├── server/
|     ├── src/ 
│       ├── models/
│       ├── routes/
│       ├── controllers/
│       ├── config/
│       └── app.js (Fastify server setup)
├── client/
|     ├── src/ 
│       ├── components/
│       ├── screens/
│       ├── contexts/
│       └── App.js (React Native entry)
└── README.md
```

---

## 🔐 Authentication

JWT tokens (`accessToken` + `refreshToken`) are generated on login and stored securely. Protected routes use middleware to verify and authorize users.

---

## 🔄 Real-Time with Socket.IO

- **Live order status updates** (e.g. "Confirmed", "Arriving", "Delivered", "Packaging")
- **Delivery partner live location** shared with customer in real-time

---

## 🌍 Google Maps Integration

- Uses **Google Maps API** to:
  - Show delivery route
  - Select delivery/pickup locations
  - Track delivery partner on a live map 
---

## 🛠️ Setup & Installation

### Backend (Fastify + MongoDB)

```bash
cd server
npm install
# create a .env file and set:
# ACCESS_TOKEN_SECRET=your_secret_key
# MONGO_URI=mongodb+srv://...
[TO BE ADDED]
npm run dev
```

### Frontend (React Native)

```bash
cd client
npm install
react-native run-android
[TO BE ADDED]
```

---

## 📌 Environment Variables

Make sure to set up the following `.env` variables:

```env
ACCESS_TOKEN_SECRET=your_secret_key
REFRESH_TOKEN_SECRET=your_refresh_secret
MONGO_URI=your_mongodb_uri
GOOGLE_MAPS_API_KEY=your_maps_key
```

---

## 📷 Screenshots

> _Add GIFs or screenshots of ordering flow, real-time tracking, delivery route on map, etc._

---

## 👥 Roles

- **Customer**: Browse, order, and track groceries
- **Delivery Partner**: Accept & deliver orders, share location
- **Admin**: Manage users, branches, and analytics

---

## 📦 TODO (if WIP)

- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Delivery time slot selection
- [ ] Reviews & ratings


---

## 🙋‍♂️ Contact

Built by [Naman Rohitas](https://github.com/namanr09)  
📧 rohitasnaman11@gmail.com  
