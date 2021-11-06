const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const productRouter = require("./Routes/product");
const orderRouter = require("./Routes/order");
const storeRouter = require("./Routes/store");

const requireLogin = require("./middleware/requireLogin");

require("dotenv").config();
app.use(bodyParser());
app.use(cors());
app.use(express.static("./public"))



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

// app.use("/order", requireLogin, function (req, res, next) {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     // console.log(token);
//     if (!token) {
//       return res.status(401).json({
//         status: "failed",
//         message: "Not Authenticated",
//       });
//     }

//     const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);

//     if (!decoded) {
//       return res.status(401).json({
//         status: "failed",
//         message: "Invalid token",
//       });
//     }

//     req.user = decoded.data;
//     next();
//   } catch (e) {
//     return res.status(500).json({
//       status: "failed",
//       message: e.message,
//     });
//   }
// });

// app.use(require("./Routes/Order"));
app.use(express.json());
app.use(bodyParser.json());
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/store",storeRouter);

require("./Models/user");
app.use(require("./Routes/auth"));

app.listen("5000", () => console.log("server is running in 5000"));
