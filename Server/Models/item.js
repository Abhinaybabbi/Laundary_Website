const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  itemId: {
    type:Number,
    required: true,
  },
  itemName: {
    type:String,
    enum: ["shirt","tshirt","trousers","jeans","boxers","joggers"],
  },
  itemQuantity: {
    type:Number,
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,ref:"order" }
    
});

const Item = mongoose.model("item",itemSchema)
module.exports=Item;
