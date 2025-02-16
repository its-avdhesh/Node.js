const express = require("express")
const app = express();
const fs = require("fs");

const logger = (req,res,next)=>{
    const timeStamp = new Date().toLocaleString()
    fs.appendFile("log.txt",`The log in time ${timeStamp}\n`,(err)=>{
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Text appended successfully!");
        }
    })
    next();
}

module.exports =logger;