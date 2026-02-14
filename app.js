const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 5000;

/* ======================
   MIDDLEWARE
====================== */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ======================
   CONNECT TO MONGODB
====================== */

mongoose.connect("mongodb://localhost:2701x/")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

/* ======================
   CREATE SCHEMA
====================== */

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

/* ======================
   ROUTES
====================== */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.send("User Registered Successfully ✅");
  } catch (error) {
    console.log(error);
    res.send("Error saving data ❌");
  }
});

/* ======================
   START SERVER
====================== */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});

