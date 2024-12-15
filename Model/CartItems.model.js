import sequelize from "../db/Connection.js";

const CartItems = sequelize.define("cartItem",{});

sequelize.sync().then(() => {
    console.log('CartItems table created successfully!');
  }).catch((error) => {
     console.error('Unable to create table : ', error);
  });

export default CartItems;