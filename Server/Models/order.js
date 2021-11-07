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
        dryclean: { type: Boolean, default: false },
        bleach: { type: Boolean, default: false },
        price: { type: Number, required: true },
      },
    ],
    address: { type: String },
    total_quantity: { type: Number },
    total_price: { type: Number },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Ready to Deliver", "Delivered", "Cancelled"],
      default: "Pending",
      required: true,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("order", OrderSchema);

module.exports = order;
