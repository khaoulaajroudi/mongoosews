// import mongoose
const mongoose = require("mongoose");

// création mongoose

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb://localhost/users");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};


module.exports=connectDB;
