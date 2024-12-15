import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/Connection";

const order=sequelize.define("order",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false
        
    },
    shippingAddress:{
       type:DataTypes.STRING,
       allowNull:false
    },
    Contact:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    totalPrice:{
        type:DataTypes.FLOAT
    }
})
sequelize.sync().then(()=>{
    console.log("order table created")
}).catch((err)=>{
    console.log(err)
})

export default order

