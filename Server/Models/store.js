const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
  location: {
    type:String,
   
  },
  phone: {
    type:Number,
   
  },
  city: {
    type: String,
    
  },
  address: {
    type: String,
    
  }
  
});

const Store = mongoose.model("Store",storeSchema)
module.exports = Store;
