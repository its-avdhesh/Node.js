const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/My_First_Project",{
        });
        console.log("MongoDB is Connected");
    } catch(err){
        console.error("There is Error",err)
        process.exit(1);
    }
    
}

module.exports = connectDB;