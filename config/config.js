const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is present (Heroku), use it
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    logging: console.log, // Log all SQL queries to console
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // For MySQL on Heroku
      },
    },
  });
} else {
  // Use local database configuration
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: console.log, // Log all SQL queries to console
  });
}

module.exports = sequelize;
