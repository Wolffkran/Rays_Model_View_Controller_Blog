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

// Add the following block
if (process.env.NODE_ENV === 'production') {
  const SequelizeStore = require('connect-session-sequelize')(require('express-session').Store);

  const session = require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
      expiration: 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
      extendDefaultFields: function (defaults, session) {
        return {
          data: defaults.data,
          expires: defaults.expires,
          userId: session.userId, // Add your user id here
        };
      },
    }),
  });

  // Use the session middleware
  app.use(session);
}

module.exports = sequelize;
