import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/Connection";

const Cart=sequelize.define("cart",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

export default Cart