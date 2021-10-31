const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
require('dotenv').config()
    // Sam Abhinay

mongoose.connect(`${process.env.MongodbServer}`, (err, then) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to db")
    }

});



app.listen("5000", () => console.log("server is running in 5K"));