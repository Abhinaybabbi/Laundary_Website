const { json } = require("body-parser");
const express = require("express");
const Order = require("../Models/order");
const router = express.Router();

const Orders = require("../Models/order");


<<<<<<< HEAD
router.get('/pastOrders', (req, res) => {
    Order.find()
        .populate("orderedBy")
        .then(orders => {
            res.json({ orders })
=======



router.get("/",async function(req,res){
    try{
        const orders= await Order.find();
        return res.json({
            status:"sucess",
            data:{
                orders
            }
>>>>>>> d72be139ebcb7ea1cbea12849ba1b260854b0f6e
        })
    }catch(e){
        res.json({
            status:"Failed",
            message: e.message
        })
    }
})
router.post("/",async (req,res)=> {
    const data = new Order({
        orderId :req.body.orderId,
        totalItems: req.body.totalItems,
        totalPrice:req.body.totalPrice,
        address : req.body.address,
        orderTimestamp : req.body.timestamps,
        // user:req.user._id,
    });
    const order = await Order.create(data,(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log("order created successfully");
        }

    });


});

router.put("/:id",async function(req,res){

=======
        .catch(err => {
            console.log(err)
        })
});

router.get('/myOrders', (req, res) => {
    Order.find({ orderedBy: req.user._id })
        .populate("orderedBy", "_id name")
        .then(myOrders => {
            res.json({ myOrders })
        })
        .catch(err => {
            console.log(err)
        })
>>>>>>> 169eabcb71217bbe25ab46cb724bebef537346a5
});



module.exports = router;

