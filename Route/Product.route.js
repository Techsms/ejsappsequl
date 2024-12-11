import express from "express";
import {saveInBulk,productList,deleteProduct} from"../Controller/Product.controller.js"

const router=express.Router();

router.post("/add",saveInBulk)
router.get("/view",productList)
router.delete("/delete/:id",deleteProduct)

export default router;