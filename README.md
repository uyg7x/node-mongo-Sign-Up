# node-mongo-Sign-Up
A full-stack Sign In authentication system built using HTML, CSS, and Node.js with MongoDB database integration. User credentials are securely stored and managed using MongoDB Compass


# User  System

This is a simple Sign In web application developed using HTML and CSS for frontend and Node.js with MongoDB for backend database storage.

The application allows users to enter their details and securely stores the data in MongoDB database. MongoDB Compass is used to manage and visualize the database.

## 🔹 Features
- Responsive Sign In page
- Backend server using Node.js
- MongoDB database integration
- Data storage and retrieval
- Clean UI using HTML & CSS

## 🔹 Tech Stack
- HTML5
- CSS3
- Node.js
- Express.js
- MongoDB
- MongoDB Compass


__________________________________________________________________________________START__________________________________________________________________________________
                               
                               ( Sign In Page with Node.js & MongoDB (Step-by-Step Installation & Setup Guide)  



🧩 1. Install Node.js
Step 1: Download
Visit: https://nodejs.org
Download LTS (Long Term Support) version.

Step 2: Install

Run the installer.
Click Next → Next → Install.
Ensure ✅ Add to PATH is selected.

Step 3: Verify Installation

Open Command Prompt and run:

node -v
npm -v

If version numbers appear → Installation successful ✅


🧩 2. Install MongoDB Community Server

Step 1: Download
Visit: https://www.mongodb.com/try/download/community
Select:
Version: Latest
OS: Windows
Package: MSI

Step 2: Install
Choose Complete Setup
Select:
✅ Install MongoDB as a Service
✅ Install MongoDB Compass
Finish installation.


🧩 3. Open MongoDB Compass

Open MongoDB Compass.
Use connection string:
mongodb://localhost:27017
Click Connect.
MongoDB is now running locally ✅


📂 4. Create Project Folder

Create a new folder:
signin-project
Open this folder in VS Code.

⚙️ 5. Initialize Node Project

Open terminal inside project folder:
npm init -y
This creates package.json


📦 6. Install Required Packages

npm install express mongoose body-parser
Package Purpose:
express → Server framework
mongoose → Connect MongoDB
body-parser → Handle form data


📁 7. Project Folder Structure
GITR3
│
├── server.js
├── public
│   ├── index.html
│   └── style.css

🌐 8. Create Sign In Page
📄 public/index.html
🎨 9. Add CSS Styling
📄 public/style.css
🖥️ 10. Create Backend Server
📄 server.js


▶️ 11. Run the Server

In terminal:
node server.js

If successful, you’ll see:
Server running on port 3000

http://localhost:3000


🔎 13. Verify Data in MongoDB Compass

Open MongoDB Compass.

Connect to:
mongodb://localhost:27017
Open database: signinDB
Open collection: users

You will see stored user data 🎉


