const express = require("express");
const Order = require("../Models/order");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();

router.get("/", requireLogin, async function (req, res) {
  try {
    const orders = await Order.find({ user_id: req.user });
    return res.json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/", requireLogin, async(req, res,next)=> {
  try{
  const number = await Order.countDocuments();
  let order_num = "AB0" + (number + 1);

  const { Wash, Iron, Fold, Bleach } = await{
    Wash: 20,
    Iron: 15,
    Fold: 10,
    Bleach: 25,
  };
  const Info = req.body.info;
  let Price = 0;
  let Quantity = 0;

  Info.forEach((inf) => {
    let total = 0;
    if (inf.wash) {
      total += inf.quantity * Wash;
    }
    if (inf.iron) {
      total += inf.quantity * Iron;
    }
    if (inf.fold) {
      total += inf.quantity * Fold;
    }
    if (inf.bleach) {
      total += inf.quantity * Bleach;
    }
    inf["price"] = total;
    Price += total;
    Quantity += parseInt(inf.quantity);
  });

  const { address, statues,store } = req.body;
  const order = await Order.create({
    order_id: order_num,
    info: Info,
    total_quantity: Quantity,
    user_id: mongoose.Types.ObjectId(req.user[0]._id),
    // total_quantity: Quantity,
    total_price: Price,
    address:address,
    statues:statues,
    store:store,
    
  });

  res.json({
    status: "success",
    data: {
      order,
    },
  });
}catch(err){
  next(err);
  console.log(err.message)

}

});

router.delete("/:id", requireLogin, async function (req, res) {
  const post = await Order.findOne({ _id: req.params.id });
  if (!post) {
    return res.status(404).json({
      status: "failed",
      message: "order Not Found",
    });
  }

  await Order.deleteOne({ _id: req.params.id });

  res.json({
    status: "success",
  });
});

router.get("/:id", requireLogin, async function (req, res) {
  try {
    const order = await Order.findOne({
      _id: mongoose.Types.ObjectId(req.params.id),
      user_id: req.user,
    });
    return res.json({
      status: "success",
      data: order,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/:id", requireLogin, async function (req, res) {
  try {
    const order = await Order.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(req.params.id),
        user_id: req.user,
      },
      { $set: { status: "Cancelled" } },
      { new: true }
    );
    return res.json({
      status: "success",
      data: order,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
