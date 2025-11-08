# 🛍️ Mock E-Commerce Cart  
### A Full Stack Shopping Cart App for Vibe Commerce Internship Assignment  

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/API-Express-black?logo=express)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🧾 Overview

This is a **full-stack shopping cart web application** built as part of the **Vibe Commerce internship screening assignment**.  
The project simulates core **e-commerce flows** — product listing, cart management, and checkout — using **React (frontend)**, **Node.js/Express (backend)**.  

---

## 🚀 Features

### 🖥️ **Frontend (React)**
- Product grid with “Add to Cart” buttons  
- Shopping cart view showing:
  - Item name, quantity, price, and total  
  - Update and remove item functionality  
- Checkout form for user details (name, email)  
- Checkout confirmation modal with:
  - Total amount  
  - Timestamped receipt  
- Fully responsive and user-friendly design  

### ⚙️ **Backend (Node.js + Express)**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/api/products` | Fetch 5–10 mock products |
| **POST** | `/api/cart` | Add product `{ productId, qty }` to cart |
| **DELETE** | `/api/cart/:id` | Remove product from cart |
| **GET** | `/api/cart` | Get all cart items with total |
| **POST** | `/api/checkout` | Simulate checkout, returns mock receipt |

---

- Integration with [Fake Store API](https://fakestoreapi.com/) for dynamic product data  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Axios |
| Backend | Node.js, Express |
| Version Control | Git & GitHub |

---

## ⚙️ Project Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/<your-username>/mock-ecom-cart.git
cd mock-ecom-cart

Backend Setup

cd backend
npm install
npm start

Backend will run on 👉 http://localhost:5000

Frontend Setup

cd frontend
npm install
npm start

Frontend will run on 👉 http://localhost:5173

```
## 📸 Screenshots
<img width="1345" height="604" alt="E-com cart screenshot 1" src="https://github.com/user-attachments/assets/8fb213ee-7272-4863-beb3-376b70e1fc16" />
<img width="1363" height="601" alt="E-com cart screenshot 2" src="https://github.com/user-attachments/assets/71ebfd94-2210-4edf-960b-d7b6d4f4692b" />
<img width="1366" height="587" alt="E-com cart screenshot 3" src="https://github.com/user-attachments/assets/384c03f5-3dce-40ef-bea2-d4188032087f" />

# 👤 Author

### Name: Mohammad Shahid
### GitHub: github.com/Shahid6516
### Email: ansarishahid06516@gmail.com


## 🧠 “Code. Build. Learn. Repeat.”

## A simple mock e-commerce experience built with love for the Vibe Commerce team ❤️






