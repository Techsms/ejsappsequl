import bodyParser from "body-parser";
import express from "express";
import ProductRouter from"./Route/Product.route.js"
import CategoryRouter from"./Route/Category.route.js"
import sequelize from "./db/Connection.js";
const app=express() 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/product",ProductRouter)
app.use("/category",CategoryRouter)
app.listen(2000,()=>{
   console.log("server started");
})