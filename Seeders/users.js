const User = require('../models/User');

const users = [
    {
        username: 'john_doe',
        email: 'john.doe@example.com',
      },
      {
        username: 'emma_smith',
        email: 'emma.smith@example.com',
      },
];

const seedUsers = async () => {
  try {
    await User.deleteMany({});
    const createdUsers = await User.insertMany(users);
    console.log('Users seeded successfully!', createdUsers);
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;
