const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const orderRouter = require("./Routes/order");
const requireLogin = require("./middleware/requireLogin");

require("dotenv").config();

app.use(cors());

mongoose.connect(`${process.env.MongodbServer}`, (err, then) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mongoDB");
  }
});

app.use("/order",requireLogin,function (req,res,next){
    try{
        const token = req.headers.authorization?.split(" ")[1];
        // console.log(token);
        if(!token) {
             return res.status(401).json({
                 status:"failed",
                 message:"Not Authenticated"
            });
        } 

        const decoded = jwt.verify(token,`${process.env.JWT_SECRET}`);
        
        if (!decoded){
            return res.status(401).json({
                status:"failed",
                message:"Invalid token"
            })

        }

        req.user= decoded.data
    }catch(e){
        return res.status(500).json({
            status: "failed",
            message: e.message
        })

    }
   
    next();
})




app.use(express.json());
app.use(bodyParser());
app.use("/order",orderRouter);

require("./Models/user");
app.use(require("./Routes/auth"));

app.listen("5000", () => console.log("server is running in 5000"));










