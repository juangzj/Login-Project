# **Secure Login System**

## **Introduction**
The Secure Login System is a project developed using modern technologies such as Node.js, Express, Sequelize, MySQL, and React. The main goal of this project is to provide a reliable solution for user authentication, implementing security best practices like using `bcrypt` for password encryption and `jsonwebtoken` (JWT) for session management.

---

## **Technologies Used**

- **Node.js**: For backend development and server management.
- **Express**: Framework for handling routes and middleware in the backend.
- **Sequelize**: ORM to efficiently interact with the MySQL database.
- **MySQL**: Relational database management system.
- **bcrypt**: For password encryption.
- **jsonwebtoken (JWT)**: For generating and validating authentication tokens.
- **React**: Framework for frontend development, providing an interactive user experience.
- **Bootstrap**: Used in the frontend to create responsive and styled components.

---

## **Project Structure**

### **Main Folders**

- **models**: Contains the user data model (`UserModel.js`) defined with Sequelize.
- **controllers**: Defines business logic, such as user creation and JWT generation.
- **routes**: Defines system routes, such as registration and login endpoints.
- **database**: Contains the database connection configuration (`bd.js`).
- **app.js**: Main file where the server is set up and executed.
- **frontend**: Contains the React application, styled with Bootstrap for responsive design.

---

## **Key Features**

### **User Registration**
- Validation and creation of new users.
- Password encryption using `bcrypt`.
- Verification of unique email addresses.

### **User Authentication**
- Credential validation using a combination of email and password.
- JWT token generation for secure sessions.
- Route protection with JWT validation middleware.

### **Frontend Features**
- **React**: Provides a dynamic and interactive interface for the user.
- **Bootstrap**: Ensures that all components are responsive and styled consistently.

### **Database Management**
- User model includes `user_id`, `name`, `last_name`, `email`, and `password`.
- MySQL connection using Sequelize.

---

## **Usage Example**

### **User Registration**
- **Endpoint:** `/auth/register`  
- **Method:** `POST`  
- **Body (JSON):**
  ```json
  {
    "name": "John",
    "last_name": "Cavid",
    "email": "john@example.com",
    "password": "password123"
  }
