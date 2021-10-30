const bodyParser =require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

mongoose.connect(MongoDBServer);

app.get("/",(req,res)=>{

});


app.listen("5000",()=>console.log("server is running in 5K"));
