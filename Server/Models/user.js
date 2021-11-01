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
  phonenumber: {
    type: Number,
    required: true,
  },
  Stateplace: {
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
  }
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
