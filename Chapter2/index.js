const fs = require("fs");


fs.appendFile("./text.txt", "hello\n", (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Text appended successfully!");
    }
});
