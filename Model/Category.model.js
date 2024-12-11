import { DataTypes } from "sequelize";
import sequelize from "../db/Connection.js";

const Category=sequelize.define("Categories",{
   slug:{
        type:DataTypes.STRING,
        allowNull:false
         },
   name:{
    type:DataTypes.STRING,
        allowNull:false
   } ,
   url:{
     type:DataTypes.STRING,
        allowNull:false
   }     
   
})
export default Category