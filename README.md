🛍️ MERN Stack E-Commerce Website

A full-stack E-Commerce application built using the MERN stack (MongoDB, Express, React, Node.js).
It allows users to browse products, add them to the cart, and checkout securely using Stripe payments.
The application also includes an Admin Panel for managing products.

🚀 Features
🛒 User Side

Browse products by category/subcategory

View product details (images, price, description, variants)

Add/remove products from Cart

Update product quantity in cart

Proceed to secure payment using Stripe

Order summary & confirmation

👩‍💻 Admin Side

Admin login authentication

Dashboard to manage products

Add new products with images, category, price, etc.

Edit existing products

Delete products

View product list

🛠️ Tech Stack

Frontend

React.js (with Context API / Redux for state management)

Axios (API calls)

TailwindCSS / Bootstrap (UI styling)

Backend

Node.js

Express.js

MongoDB (with Mongoose ORM)

Payments

Stripe API integration

Other Tools

Cloudinary (for product image storage)

JWT Authentication

bcrypt.js (password hashing)

📂 Project Structure
ecommerce-app/
│── backend/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes (products, auth, orders, payments)
│   ├── controllers/   # Business logic
│   ├── config/        # DB connection, Stripe keys, etc.
│   └── server.js      # Express entry point
│
│── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # User & Admin pages
│   │   ├── context/      # Cart & Auth context
│   │   └── App.js
│   └── package.json
│
└── README.md

⚡ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce

2. Backend Setup
cd backend
npm install


Create a .env file inside backend/ with the following:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


Run the backend:

npm run server

3. Frontend Setup
cd frontend
npm install
npm start

💳 Stripe Test Cards

Use these test cards while in development mode:

Success: 4242 4242 4242 4242 (any future date, any CVC)

Authentication Required: 4000 0027 6000 3184

Declined: 4000 0000 0000 9995

📸 Screenshots (Optional)

Add UI and admin panel screenshots here

✅ Future Improvements

User order history & tracking

Wishlist functionality

Admin order management

Email notifications

📜 License

This project is licensed under the MIT License.
