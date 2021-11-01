const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  name: {
    type:String,
    enum: ["shirt","tshirt","trousers","jeans","boxers","joggers"],
  },
  quantity: {
    type:Number,
    // required: true,
  },
  price:{type:Number},
  washtype:{
    type:String,
    enum:["wash","iron","dryclean","fold"]
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,ref:"order" }
    
});

const Item = mongoose.model("item",itemSchema)
module.exports=Item;
