const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
