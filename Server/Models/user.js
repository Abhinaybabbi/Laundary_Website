const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

mongoose.model("User", userSchema);
