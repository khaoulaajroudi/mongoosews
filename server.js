// import express
const express = require("express");
const res = require("express/lib/response");

// import dotenv
require("dotenv").config();

// importation database
const connectDB = require("./config/connectbd");
connectDB();

// import schemas
const user = require("./models/user");

// initialisaion express
const app = express();

app.post("/add", async (req, res) => {
  try {
    let newUser = new user({ ...req.body });
    let result = await newUser.save();
    req.send({ result, msg: "sucesfuly aded" });
  } catch (error) {
    console.log(error);
    res.send({msg:"fail"})
  }
});

// creation serveur
app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server is running");
});
