
# Smart Recipe Finder

A web application that helps users find, add, and explore recipes based on ingredients, dietary preferences, and more. This application is built using the **MERN** stack (MongoDB, Express.js, React, Node.js), with **Vite** as the frontend bundler for fast development.

---

## Features

- **Recipe Search:** Search for recipes by name, ingredients, or category.
- **Recipe Details:** View detailed instructions, ingredients, and images.
- **Add New Recipes:** Submit and save your favorite recipes.
- **Responsive Design:** Optimized for mobile and desktop viewing.

---

## Tech Stack

- **Frontend:** React + Vite, CSS
- **Backend:** Express.js, MongoDB, Node.js
- **Database:** MongoDB

---

## Project Structure

```
smart-recipe-finder/
├── backend/                     # Backend (Express + MongoDB)
│   ├── config/                  # Database configuration
│   ├── models/                  # MongoDB models
│   ├── routes/                  # API routes
│   ├── controllers/             # API controllers
│   └── server.js                # Main server file
│
└── frontend/                    # Frontend (Vite + React)
    ├── public/                  # Static assets
    ├── src/                     # React app source files
    │   ├── components/          # React components
    │   ├── pages/               # Page components (optional)
    │   ├── api/                 # API functions
    │   ├── styles/              # Global styles
    │   └── utils/               # Utility functions (optional)
    └── vite.config.js           # Vite configuration file
```

---

## Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org/) and npm (or yarn)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### 2. Installation

#### Clone the Repository

```bash
git clone https://github.com/your-username/smart-recipe-finder.git
cd smart-recipe-finder
```

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection URI:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run start
   ```
   The backend will run on `http://localhost:5000`.

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory for API URL configuration:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the frontend server with Vite:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

---

## Usage

1. Visit `http://localhost:5173` to view the application.
2. Use the search feature to find recipes, view recipe details, and add new recipes.

---

## API Endpoints

- **GET /api/recipes** - Retrieve a list of recipes
- **POST /api/recipes** - Add a new recipe
- **GET /api/recipes/:id** - Retrieve recipe details by ID

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions, please reach out to [kashyapsrujan12@gmail.com](mailto:kashyapsrujan12@gmail.com).

---
