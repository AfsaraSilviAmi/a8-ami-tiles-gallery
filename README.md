# 🧱 Tiles Gallery

A modern and responsive web application for exploring, viewing tile gallery with authentication and user personalization features.

---

## 🌐 Live URL  
👉 https://a8-ami-tiles-gallery.vercel.app/

---

## 🎯 Project Purpose

**Tiles Gallery** is built to provide a clean and interactive platform where users can:

- Browse beautiful tile collections  
- View detailed information about each tile  
- Create an account and manage their profile  
- Experience a personalized and secure interface  

This project focuses on combining **UI design, authentication, and dynamic content rendering** into a real-world application.

---

## ✨ Key Features

### 🏠 Homepage
- Displays **featured/top tiles**
- Clean and visually appealing hero/banner section
- Quick navigation to explore tiles

---

### 🧩 All Tiles Page
- Shows the complete collection of tiles
- Card-based layout
- Each tile includes a **"View Details"** option which can be accessed by only logged in users

---

### 🔍 Tile Details Page *(Protected Route)*
- Accessible **only for logged-in users**
- Displays full tile information
- Enhances user engagement with deeper insights

---

### 🔐 Authentication System
- User Registration (Sign Up)
- Login with Email & Password
- Google Sign-In (OAuth)
- Secure session handling

---

### 👤 My Profile Page *(Protected Route)*
- Accessible only after login
- Displays user information
- Users can:
  - ✏️ Update their **name**
  - 🖼️ Change their **profile picture**

---

### 🚫 Route Protection
- Unauthorized users are redirected from:
  - Profile page  
  - Tile details page  

---

## 🛠️ Technologies & Packages Used

### ⚙️ Core Stack
- Next.js (App Router)
- React
- Tailwind CSS

---

### 🎨 UI & Styling
- HeroUI
- Animate.css

---

### 🔐 Authentication
- Better Auth / Auth Client
- Google OAuth

---

### 🧰 Utilities
- React Toastify (notifications)
- Iconify
- Gravity UI Icons

---

## 📦 NPM Packages

```bash
npm install react-toastify
npm install @iconify/react
npm install @gravity-ui/icons
npm install @heroui/react
npm install animate.css