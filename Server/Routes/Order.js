const { json } = require("body-parser");
const express = require("express");
const Order = require("../Models/order");
const router = express.Router();



router.get('/pastOrders', (req, res) => {
    Order.find()
        .populate("postedBy")
        .then(orders => {
            res.json({ orders })
        })
        .catch(err => {
            console.log(err)
        })
});


router.post('/createOrder', (req, res) => {
    const { productType, quantity, washType, price } = req.body
    if (!productType || !quantity || !washType || !price) {
        return res.status(422).json({ message: "Please add all fields" })
    }
    const order = new Order({
        productType,
        quantity,
        washType,
        price,
        orderedBy: req.user
    })
    order.save()
        .then(result => {
            res.json({ order: result })
        })
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
});



module.exports = router;