// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mariadb://root@localhost:3306/MyanSan',{
    dialect: 'mariadb',
});


module.exports = sequelize;