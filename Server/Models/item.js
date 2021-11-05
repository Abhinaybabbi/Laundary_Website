const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({

  name: {
    type:String,
    enum: ["shirt","tshirt","trousers","jeans","boxers","joggers"],
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    },
  },
  service: { type: mongoose.Schema.Types.ObjectId,ref:"service" },

  totalprice:{type:Number}
    

});

const Item = mongoose.model("item", itemSchema)
module.exports = Item;