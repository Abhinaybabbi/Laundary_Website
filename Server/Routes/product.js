const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const requireLogin = require('../middleware/requireLogin')
const product = require('../models/item')

// Get all products
router.get('/', requireLogin,(req, res) => {
    Products.find({}).toArray((err, documents) => {
        res.send(documents);
    });
});


// Update Product Information
router.post('/:ProductId', requireLogin,(req, res,next) => {
    const productdata = req.body;
    products.updateOne(
        { _id: ObjectId(productdata.id) },
        {
            $set: { name: productdata.name, price: productdata.price }
        },
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: err });
            } else {
                res.send(result.modifiedCount > 0);
                console.log(result);
            }
        }
    );
});


// Add Products in inventory
router.post('/',requireLogin,(req, res,next) => {
    const allProduct = req.body;
    products.insertOne(allProduct).then((result) => {
        console.log(result.insertedCount);
        res.send(result.insertedCount > 0);
    });
});

module.exports = router