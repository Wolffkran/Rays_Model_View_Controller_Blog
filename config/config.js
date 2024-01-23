require('dotenv').config();
const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  // Use JawsDB URL for production
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Use local configuration for development
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.PORT || 3306,
  });
}

module.exports = sequelize;
