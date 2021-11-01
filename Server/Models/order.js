const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderId: {
    type:Number,
    required: true,
  },
  totalItems: {
    type:Number,
    required: true,
  },
  totalPrice: {
    type:Number,
    required: true,
  },
  store: {
    type:mongoose.Schema.Types.ObjectId,ref:"store"},
  user: {
  type: mongoose.Schema.Types.ObjectId, ref:"user"},

  address : {type:String},

  cancellation: {type:Boolean, default:"No"},
  status: {
    type:String,
    enum: [ "pending", "pickedUp", "inProgress", "readyToDeliver", "delivered", "cancelled" ],
    Default:"pending"
  }  
},{  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const Order = mongoose.model("Order",orderSchema)
module.exports=Order;
