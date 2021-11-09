const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    order_id: { type: String, required: true },
    user_id: { type: mongoose.Types.ObjectId, reference: "User" },
    info: [
      {
        item: { type: String },
        quantity: { type: Number },
        wash: { type: Boolean, default: false },
        iron: { type: Boolean, default: false },
        fold: { type: Boolean, default: false },
        bleach: { type: Boolean, default: false },
        price: { type: Number, required: true },
      },
    ],
    store :
      {
      location :{type:String},
      city :{type:String},
      address:{type:String},
      phone:{type:String},
      },
    
    
    address: { type: String },
    total_quantity: { type: Number },
    total_price: { type: Number },
     
    statues: {
      type: String,
      enum: ["Ready to Pickup", "Processing", "Ready to Deliver", "Delivered", "Cancelled"],
      default: "Ready to Pickup",
      required: true,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("order", OrderSchema);

module.exports = order;
