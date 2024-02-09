const express = require("express");
const {Product} = require("../models")
const router = express.Router();

router.get("/all", async(req,res)=>{
    let product = await Product.findAll();
    res.json(product)
})

router.get("/:id", async(req,res)=>{
    let {id} = req.params;
    let result = await Product.findOne({where:{id:id}})
    res.json(result)
    
})

router.put("/:id",async(req ,res)=>{
    let {stock} = req.body;

})

router.post("/createproduct",async(req,res)=>{
    let {productname,producttype,companyname,stock} = req.body
    let product = await Product.create({productname,producttype,companyname,stock});
    res.json(product)
})

module.exports = router