const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost', // Use DB_HOST if provided, otherwise 'localhost'
    dialect: 'mysql',
    port: process.env.PORT || 3306, // Use the PORT variable provided by Heroku, default to 3306 if not available
  });
}

module.exports = sequelize;
