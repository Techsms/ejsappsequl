import express from "express"
import{signIn,signUp} from "../Controller/User.controller.js"
import {body} from "express-validator"

const router=express.Router()

router.post("/signUp",body("username","username is  required").notEmpty(),
 body("email","email id is required").notEmpty(),
 body("email","not a valid  email").isEmail(),
 body("password","password is  required").notEmpty(),
 body("password","password must be between 6 to 10").isLength({mix:6,max:10}),
body("contact","only digits are allowed").isNumeric(),signUp)
 
router.post("/sign-in",signIn)
export default router;
