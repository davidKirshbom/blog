# Blog Project - MERN Stack with React (Vite) and MySQL

This project is a full-stack blog application built with a JavaScript backend and a React frontend.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
  - [Backend](#backend-usage)
  - [Frontend](#frontend-usage)
- [Development](#development)
- [License](#license)
- [Contributing](#contributing)

## Technologies

### Backend

- Node.js
- Express.js
- Sequelize.js
- MySQL

### Frontend

- React
- Vite

## Installation

### Prerequisites

- Node.js and npm (or yarn) installed on your system.
- MySQL server running locally or remotely.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/davidKirshbom/blog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog
   ```

3. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

5. Configure the database connection in `backend/.env` with your MySQL details check `backend/.example.env` for required data.

6. Run the Sequelize migrations to create the necessary database tables:

   ```bash
   npm run dev:migrate
   ```

7. Run the Sequelize seeders to populate the database with initial data:

   ```bash
    npm run dev:seed
   ```

## Usage

### Backend Usage

Start the backend server:

     ```bash
     cd ./backend
     npm run dev
     ```

<!-- This will start the serverdf. (usually http://localhost:5173). -->

### Frontend Usage

Start the frontend development server:

     ```bash
     cd ./frontend
     npm run dev
     ```

This will open the application in your default browser (usually http://localhost:5173).