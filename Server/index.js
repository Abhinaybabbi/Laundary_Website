const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const orderRouter = require("./Routes/order");
require('dotenv').config() 


mongoose.connect(`${process.env.MongodbServer}`, (err, then) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to db")
    }

});

app.use(bodyParser());
app.use("/order",orderRouter);

app.listen("5000", () => console.log("server is running in 5K"));