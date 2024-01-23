require('dotenv').config();

const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.NODE_ENV === 'production') {
  // For production, use the DATABASE_URL provided by Heroku
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // For other environments, use your existing configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      port: process.env.PORT || 3306,
    }
  );
}

// Export the sequelize instance
module.exports = sequelize;

// Add a function to help with seeding
module.exports.seedDatabase = async () => {
  try {
    // Run your seeding logic here
    console.log('Seeding the database...');

    // Example: Create a Post using the model
    const Post = require('../models/Post');
    await Post.create({
      title: 'Example Post',
      body: 'This is a sample post.',
    });

    console.log('Database seeding completed.');

    // Close the database connection
    await sequelize.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};
