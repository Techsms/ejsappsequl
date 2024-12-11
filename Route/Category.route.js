import express from "express";
import {saveInBulk,categoryList, deleteCategory} from"../Controller/Category.controller.js"

const router=express.Router()

router.post("/add",saveInBulk)
router.get("/view",categoryList)
router.delete("/delete/:id",deleteCategory)

export default router;