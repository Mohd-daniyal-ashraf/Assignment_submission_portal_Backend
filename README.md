﻿# Assignment_submission_portal_Backend
#### This project is a backend system for an assignment submission portal. Users can upload assignments, and admins can accept or reject them. The system is built using Node.js, Express.js, and MongoDB.

# Features
- User Functionality:
  - Register and login.
  - Upload assignments.
  - View all admins

- Admin Functionality:
  - Register and login.
  - View all assignments tagged to the admin.
  - Accept or reject assignments.

# Technologies Used
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Token)


# Setup and Installation
### Follow the steps below to set up and run the project:

## 1. Clone the Repository
````
git clone https://github.com/your-username/assignment_submission_portal_Backend
cd assignment_submission_portal_Backend
 ````

# 2. Install Dependencies
 ````
npm install
 ````

# 3. Set Up Environment Variables
## Create a .env file in the root directory and configure the following variables:
 ````
PORT=3000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
 ````
## Replace your-mongodb-connection-string with your MongoDB connection URL and your-secret-key with a secure secret key for JWT.
# 4. Start the Server
## Run the server locally:
 ````
npm start
 ````
## The server will start running on the specified port (default: 3000).

## **API Endpoints**

### **User Endpoints**

| Method | Endpoint                    | Description           |
|--------|-----------------------------|-----------------------|
| POST   |  /register                  | Register a new user.  |
| POST   |  /login                     | User login.           |
| POST   |  /assignments/upload        | Upload an assignment. |
| POST   |  /admins                    | Fetch all admins.     |



### **Admin Endpoints**

| Method | Endpoint                        | Description            |
|--------|---------------------------------|------------------------|
| POST   |  /register                      | Register a new admin.  |
| POST   |  /login                         | Admin login.           |
| GET    |  /assignments                   | View assignments.      |
| POST   |  /assignments/:id/accept        | Accept an assignment.  |
| POST   |  /assignments/:id/reject        | Reject an assignment.  |












