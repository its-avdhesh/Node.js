const express = require("express");
const router = express.Router();
const { homePage } = require("../controllers/home");  // Home controller
const { allUsers, user1Info, user2Info, user3Info, createUsers } = require("../controllers/users"); // Users controller

// Home page route
router.get("/", homePage);

// Post 
router.post("/allUsers", createUsers)

// Route to get all users from DB
router.get("/allUsers", allUsers);

// Routes to fetch individual user info
router.get("/user1", user1Info);
router.get("/user2", user2Info);
router.get("/user3", user3Info);

module.exports = router;
