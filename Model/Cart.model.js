import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/Connection.js";

const Cart=sequelize.define("cart",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

sequelize.sync().then(() => {
    console.log('Cart table created successfully!');
  }).catch((error) => {
     console.error('Unable to create table : ', error);
  });

export default Cart; 