const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
  storeId: {
    type:Number,
    required: true,
  },
  storeName: {
    type:String,
    required: true,
  },
  phone: {
    type:Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
  
});

const Store = mongoose.model("store",storeSchema)
module.exports=Store;
