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
    type:mongoose.Schema.Types.ObjectId, ref="store"
  },
  user: {
  type: mongoose.Schema.Types.ObjectId, ref="user"
  },
  address : String,
  cancellation: Boolean,
  status: {
    type:String,
    enum: [ Pending, PickedUp, InProgress, ReadyToDeliver, Delivered, Cancelled ],
    Default:"Pending"
  },
  
});

const Order = mongoose.model("Order",orderSchema)
module.exports=Order;
