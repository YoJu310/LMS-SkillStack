# SkillStack - Learning Management System

**SkillStack** — A scalable, user-friendly Learning Management System built with the **MERN** stack. Designed to help instructors create courses, manage content, and track learners while providing students with a clean, responsive learning experience.

🌐 **Live site**: [https://skillstack-frontend.vercel.app/](https://skillstack-frontend.vercel.app/)  
📦 **GitHub repository**: [https://github.com/YoJu310/LMS-SkillStack](https://github.com/YoJu310/LMS-SkillStack)

---

## 🚀 Features

- 🔐 User registration and login with **clerk** authentication
- 👩‍🏫 Instructor and student roles with separate dashboards
- 🎬 Upload and stream course video
- 🛍️ Enrollment management and progress tracking
- 🔍 Searchable course catalog and filters (category, difficulty, tags)
- 📱 Responsive UI for desktop and mobile 
- 💳 Course payment method: **Stripe**
- ☁️ Image upload with **Cloudinary**


## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, React Router DOM  
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Payment gateway**: Stripe API (with webhook support)
- **Security**: bcrypt (password encryption)
- **Deployment**: Vercel (frontend), Render/Local (backend) 


## ⚙️ Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v14.x or above)
- MongoDB (local instance or Atlas)
- Cloudinary account for image storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YoJu310/LMS-SkillStack
   cd LMS-SkillStack
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `/client` directory and include the following:

   ```env
   VITE_CURRENCY = '$'
   VITE_BACKEND_URL = "http://localhost:5000"
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```
   
   Create a `.env` file in the `/server` directory and include the following:

   ```env
    CURRENCY = 'USD'
    MONGO_URI=your_mongodb_connection_string
    CLERK_WEBHOOK_SECRET =  your_clerk_webhook_secret
    CLERK_PUBLISHABLE_KEY=  your_clerk_publishable_key
    CLERK_SECRET_KEY= your_clerk_secret_key
    CLOUDINARY_CLOUD_NAME= your_cloudinary_name
    CLOUDINARY_API_KEY= your_cloudinary_api_key
    CLOUDINARY_API_SECRET= your_cloudinary_secret
    STRIPE_PUBLISHABLE_KEY= your_stripe_publishabe_key
    STRIPE_SECRET_KEY= your_stripe_secret_key
    STRIPE_WEBHOOK_SECRET= your_stripe_webhook_secret
   ```
   

4. Start the development servers:

   ```bash
   # Start the backend server
   cd server
   npm run server

   # Start the frontend server
   cd client
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.


 ### 🧪 Testing Stripe Payments
- You must use a Stripe Business Account (India) and configure your keys properly.
- Use Stripe test card: 4242 4242 4242 4242 – Any future expiry date, any CVC.


## 👩‍💻 Author

Made with ❤️ by [Yojna Singh](https://github.com/YoJu310) 
