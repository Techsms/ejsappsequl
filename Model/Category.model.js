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
sequelize.sync().then(() => {
   console.log('Category table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
export default Category