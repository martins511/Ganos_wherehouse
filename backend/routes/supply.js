const express = require("express");
const {Supply} = require("../models")
const router = express.Router();

// router.get("/:id", async(req,res)=>{
//     let id = req.params.id
//     let pr = await Supply.findOne({where:{id:id}})
//     res.send(pr)
// })

router.get("/sup",async(req,res)=>{
    let ds = await Supply.findAll()
    res.json(ds)
})

router.post("/createsupply", async(req,res)=>{
    let supplyitem = {
        productname: req.body.productname,
        qty: req.body.qty,
        customername: req.body.customername,
        supply: req.body.supply,
        balance: req.body.balance
    };

    let result = await Supply.create(supplyitem);
    res.json(result)
})

module.exports = router