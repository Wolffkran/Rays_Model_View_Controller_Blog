const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  // Your sequelize configuration
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'tech_blog_db',
});

module.exports = sequelize;
