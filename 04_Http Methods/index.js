const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/First-Project")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error", err));

// Middleware to parse JSON request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Schema  
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {  // Fixed spelling mistake
    type: String,
  },
});

// Model
const User = mongoose.model("User", userSchema);

// Root Route 
app.get("/", (req, res) => {
  res.send("Hello From The Server");
});

app.get("/users", async (req, res) => {
    try {
      const allDbUsers = await User.find({});
      
      const html = `
        <ul>
          ${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
        </ul>
      `;
  
      res.send(html);  // Send the HTML response
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

// Post Route
app.post("/api/users", async (req, res) => {
  const { first_name, last_name, email, gender, job_title } = req.body;

  if (!first_name || !last_name || !email || !gender || !job_title) {
    return res.status(400).json({ msg: "All Fields are required" });
  }

  try {
    const result = await User.create({
      firstName: first_name,
      lastName: last_name,
      email: email,
      gender: gender,
      jobTitle: job_title,
    });

    console.log("result", result);
    return res.status(201).json({ msg: "Success", user: result });
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

// Start server
app.listen(port, () => console.log(`Server started at Port ${port}`));
