# Todos Application

## Overview
The Todos Application is a React-based project designed to manage tasks efficiently. It provides features like adding, editing, filtering, and managing todos. The application is styled using Tailwind CSS and leverages modern tools like Vite for development.

## Features
- User authentication (Login/Register)
- Add, edit, and delete todos
- Filter todos by various criteria
- Responsive design
- API integration for todos management
- Modular and reusable components

## Project Structure
The project is organized into the following main directories:

- **src/components**: Contains reusable components like `Modal`, `TodosApp`, etc.
- **src/helpers**: Utility functions for various operations like text manipulation, date formatting, etc.
- **src/redux**: Redux store setup and slices for state management.
- **src/pages**: Pages of the application (e.g., Home, Login, Register, Todos).
- **src/routes**: Route components for handling private and public routes.
- **src/store**: Context providers for managing global state.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Redux Toolkit**: State management.
- **Vite**: Build tool for faster development.
- **Tailwind CSS**: Utility-first CSS framework.
- **ESLint**: Linting tool for maintaining code quality.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Lubov1506/todos
   ```
2. Navigate to the project directory:
   ```bash
   cd todos
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the application in your browser at `http://localhost:3000`.

## Deployment
The project is configured for deployment on Vercel. Update the `vercel.json` file as needed and deploy using the Vercel CLI or dashboard.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.