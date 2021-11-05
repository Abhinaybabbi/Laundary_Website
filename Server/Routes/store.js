const { json } = require("body-parser");
const express = require("express");
const Store = require("../Models/store");
const storerouter = express.Router();



storerouter.get("/", async function(req, res) {
    try {
        const store = await Store.find();
        return res.json({
            status: "sucess",
            data: {
                store
            }

        })
    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
});
storerouter.post("/", async(req, res) => {
    const { city , location , address , phone} =req.body;
    const store = await Order.create({
        name , location , address , phone 
    });
    res.json({
        status: "sucess",
        data: {
            store
        }

    })


});



module.exports = storerouter;