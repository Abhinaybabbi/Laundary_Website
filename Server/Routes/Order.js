const { json } = require("body-parser");
const express = require("express");
const requireLogin = require("../middleware/requireLogin");
const Order = require("../Models/order");
const router = express.Router();


router.get("/", async function(req, res) {
    try {
        const orders = await Order.find();
        return res.json({
            status: "sucess",
            data: {
                orders
            }

        })
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})
router.post("/", requireLogin, async(req, res) => {
    const { totalItems , totalPrice , address , orderTimestamp} =req.body;
    const data = new Order({
        totalItems: req.body.totalItems,
        totalPrice: req.body.totalPrice,
        address: req.body.address,
        orderTimestamp: req.body.timestamps,
        user: req.user._id
    });
    const order = await Order.create({
        totalItems , totalPrice , address , orderTimestamp , user : req.user
    });
    res.json({
        status: "sucess",
        data: {
            order
        }

    })


});

router.put("/:id", async function(req, res) {

});


module.exports = router;