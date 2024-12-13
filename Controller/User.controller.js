import {validationResult} from "express-validator"
import User from "../Model/User.model.js"
import bcrypt from "bcrypt"


export const signIn= async(request,response,next)=>{
let {email,passoword}=request.body
let User=await User.findOne({where:{email},raw:true})
if(User){
    let dbPassword=user.passoword
    let status=bcrypt.compareSync(passoword,dbPassword)
    return status? response.status(200).json({message:"sign in success",user}): response.status(401).json({error:"unauthorized user"})
}
return response.status(401).json({error:"unauthorized user"})
}

export const signUp= async(request,response,next)=>{
    try{
        const error=validationResult(request)
        if(!error.isEmpty())
            return response.status(401).json({error:error.array()})
       
        let result=await User.create(request.body)
          return response.status(201).json({message:"user created"})
}
catch(err){
    console.log(err)
    return response.status(500).json({error:"Internal server Error"})
}
}