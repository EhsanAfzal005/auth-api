const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Protected route (only accessible with valid token)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user
  });
});

module.exports = router;
