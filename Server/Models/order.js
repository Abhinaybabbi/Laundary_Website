const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  totalItems: {
    type:Number,
    required: true,
  },
  totalPrice: {
    type:Number,
    required: true,
  },
  items: [{
      item:{type:mongoose.Schema.Types.ObjectId,ref:"item"}
   }
  ],
 
    
  // store : {type:mongoose.Schema.Types.ObjectId,ref:"store"},
    
  
  
  user:{type: mongoose.Schema.Types.ObjectId, ref:"user"},

  address : {type:String},

  cancellation: {type:Boolean, default:false},
  status: {
    type:String,
    enum: [ "pending", "pickedUp", "inProgress", "readyToDeliver", "delivered", "cancelled" ],
    Default:"pending"
  }  
},{  timestamps:true,
  // { currentTime: () => Math.floor(Date.now() / 1000) }
}
);

const Order = mongoose.model("Order",orderSchema)
module.exports=Order;
