const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Menu model

const Menu = sequelize.define('menu', {
          title: {
                    type: Sequelize.STRING,
          },
});

module.exports = {Menu};