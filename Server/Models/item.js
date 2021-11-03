const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
<<<<<<< HEAD
    itemId: { type: Number, required: true, },
    itemName: { type: String, enum: ["shirt", "tshirt", "trousers", "jeans", "boxers", "joggers"], },
    itemQuantity: { type: Number, required: true, },
    order: { type: mongoose.Schema.Types.ObjectId, ref: "order" }

=======
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
    
>>>>>>> 69ee374aa96ecbf6bee213ae3bbea30326c24175
});

const Item = mongoose.model("item", itemSchema)
module.exports = Item;