# 🧱 Tiles Gallery

A modern and responsive tile gallery web application where users can explore beautiful tile collections, view detailed information, and personalize their experience through secure authentication and profile management.

---

## 🌐 Live Demo

🔗 https://a8-ami-tiles-gallery.vercel.app/

---

## 📖 Project Overview

Tiles Gallery is a full-stack web application built with Next.js that showcases a collection of decorative tiles through a clean and responsive interface. Users can browse featured and complete tile collections, securely sign in, access protected tile details, and manage their personal profiles.

---

## 🎯 Purpose

The goal of Tiles Gallery is to provide a visually appealing platform for exploring tile collections while demonstrating modern authentication, protected routes, responsive UI design, and dynamic content rendering using Next.js.

---

## ✨ Core Features

### 🏠 Homepage
- Beautiful hero/banner section
- Featured tile collections
- Responsive and user-friendly layout

### 🧱 Tile Gallery
- Browse all available tiles
- Card-based responsive layout
- View detailed tile information

### 🔒 Protected Tile Details
- Accessible only to authenticated users
- Displays complete information for each tile
- Secure route protection

### 👤 User Authentication
- Email & Password Authentication
- Google Sign-In (OAuth)
- BetterAuth Authentication
- Secure session management

### 🙍 User Profile
- View profile information
- Update name
- Change profile picture

### 🛡️ Route Protection
- Profile page is protected
- Tile Details page is protected
- Unauthorized users are redirected to the login page

---

## 🛠️ Technologies Used

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Animate.css

### Authentication
- BetterAuth
- Google OAuth

### Utilities
- React Toastify
- Iconify
- Gravity UI Icons

---

## 📦 Dependencies

### Client

```bash
next
react
react-dom
tailwindcss
@heroui/react
better-auth
react-toastify
@iconify/react
@gravity-ui/icons
animate.css
```

---

## ⚙️ Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/AfsaraSilviAmi/a8-ami-tiles-gallery.git
```

### 2. Navigate to the project

```bash
cd Tiles-Gallery
npm install
```

### 3. Configure Environment Variables

Create a `.env` file.

Example:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Run the development server

```bash
npm run dev
```

---

## 📂 Resources

- 🌐 Live Website: https://a8-ami-tiles-gallery.vercel.app/
- 📁 Repository: https://github.com/AfsaraSilviAmi/a8-ami-tiles-gallery.git

---

## 🚀 Future Improvements

- Search and filter tiles
- Favorite/Wishlist functionality
- Tile categories and sorting
- User reviews and ratings
- Admin dashboard for managing tile collections
