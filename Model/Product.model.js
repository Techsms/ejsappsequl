import { DataTypes } from "sequelize";
import sequelize from "../db/Connection.js";
const product = sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
  },
    price:{
        type:DataTypes.FLOAT
    }
 },
{
timestamps: false
});
 
 sequelize.sync().then(() => {
   console.log('product table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
 export default product;