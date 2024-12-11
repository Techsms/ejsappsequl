const Sequelize = require('sequelize'); 
const sequelize = new Sequelize( 
    'appsql', 
    'root', 
    '9111337529',
     { 
      dialect: 'mysql', 
      host: 'localhost'
    } 
); 


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
