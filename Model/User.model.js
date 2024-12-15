import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/Connection.js";
import bcrypt from "bcryptjs"


const User=sequelize.define("user",{
    id:
{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
username:{
    type:DataTypes.INTEGER,
    allowNull:false,
},
password:{
    type:DataTypes.INTEGER,
    allowNull:false,
    set(v){
        console.log("Inside setter"+v)
        let saltKey=bcrypt.genSaltSync(10)
        let encryptedPassword=bcrypt.hashSync(v,saltKey)
        this.setDataValue("password",encryptedPassword)
    }
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
},
contact:{
    type:DataTypes.BIGINT,
    allowNull:false
}
})

sequelize.sync().then(()=>{
    console.log("user table created")
}).catch(err=>{
    console.log(err)
})
export default User;