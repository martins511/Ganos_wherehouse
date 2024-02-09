const express = require("express");
const { Product} = require("../models")
const router = express.Router();

router.put("/update/",async(req,res)=>{
    try {
    let {id, qty, received, bal, productname} = req.body;

        let [count, rows] = await Product.update({qty, received, stock: bal, productname}, { where: { id: id } });
        if (count > 0) {
            console.log(rows);
            console.log(count);
            res.json(rows); 
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error updating stock adjustment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
})

module.exports = router