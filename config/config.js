const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // For MySQL on Heroku
      },
    },
  });
} else {
  // Use local configuration or whatever is appropriate for development
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  });
}

module.exports = sequelize;
