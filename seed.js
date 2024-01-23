const sequelize = require('./config/config');

// Import the seedDatabase function from config.js
const { seedDatabase } = require('./config/config');

// Run the seedDatabase function
seedDatabase();
