const express = require("express");
const cors =  require("cors")
const app = express();
const stockAdjustmentRouter = require("./routes/stockAdjustment")
const productRouter = require("./routes/products");
const supplyRouter = require("./routes/supply")
const db = require("./models")
app.use(express.json())
app.use(cors())
app.use("/product",productRouter)
app.use("/supply", supplyRouter)
app.use("/stockAdjust", stockAdjustmentRouter)

let supply,product
db.sequelize.sync({alter:true}).then(()=>{
   console.log("Syncing");
})
app.listen(3500, ()=>{
    console.log(`listening to port ${3500}`);
})