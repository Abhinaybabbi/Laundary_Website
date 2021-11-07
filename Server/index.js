const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const orderRouter = require("./Routes/order");
const userRouter = require("./Routes/user");

const requireLogin = require("./middleware/requireLogin");

require("dotenv").config();
app.use(bodyParser());
app.use(cors());
app.use(express.static("./public"))
app.use(require("./Routes/auth"));


// app.all("*",(req,res)=>{
//   res.status(404).send("<h1> 404 !! You shouldn't be here... <h1> ")
// })

mongoose.connect(`${process.env.MongodbServer}`, (err, then) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to mongoDB");
    }
});


app.use(express.json());
app.use(bodyParser.json());
app.use("/orders", orderRouter);
app.use("./user", userRouter);

require("./Models/user");
require("./Models/order");
app.use(require("./Routes/auth"));

app.listen("5000", () => console.log("server is running in 5000"));