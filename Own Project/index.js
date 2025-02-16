const express = require("express");
const app = express();
const connectDB = require("./connections.js");
const logger = require("./middlewares/log");  // Import logger
const { homePage } = require("./controllers/home"); // Import homePage
const { allUsers, createUsers } = require("./controllers/users"); // Import allUsers

connectDB();
app.use(express.json());


// Apply logger only on homepage
app.get("/", logger, homePage);

// Fetch users without logger
app.get("/allUsers", allUsers);
app.post("/allUsers",createUsers);

// Start the server
app.listen(8001, () => {
    console.log("The server has started on port 8001");
});
