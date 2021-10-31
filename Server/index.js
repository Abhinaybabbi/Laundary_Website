const bodyParser =require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require("dotenv");

mongoose.connect("mongodb+srv://adminab:zxcvbnm123@sandbox.tjibg.mongodb.net/Laundary_website?retryWrites=true&w=majority",(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to db")
    }

});



app.listen("5000",()=>console.log("server is running in 5K"));
