const User = require("../models/user");  // Import the User model

async function allUsers(req, res) {
    try {
        const allDBUsers = await User.find({});
        res.json(allDBUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function createUsers(req, res) {
    try {
        const { firstName, lastName, email, jobTitle, gender } = req.body;

        const newUser = new User({ firstName, lastName, email, jobTitle, gender });
        await newUser.save();

        res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (error) {  // ✅ Now `error` is correctly defined
        console.error(error);  // ✅ Logs the error
        res.status(500).json({ message: "Internal Server Error", error: error.message });  // ✅ Sends a proper response
    }
}


async function user1Info(req, res) {
    res.json({ message: "User 1 Info" });
}

async function user2Info(req, res) {
    res.json({ message: "User 2 Info" });
}

async function user3Info(req, res) {
    res.json({ message: "User 3 Info" });
}

// Correct export format
module.exports = {
    allUsers,
    user1Info,
    user2Info,
    user3Info,
    createUsers,
};
