// Import necessary modules and models
const { User, Post, Comment } = require('./models'); // Update with your actual models

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Your seeding logic here
    // Example: Create users, posts, and comments
    await User.bulkCreate([
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      // Add more users as needed
    ]);

    await Post.bulkCreate([
      { title: 'Post 1', body: 'Content for post 1', userId: 1 },
      { title: 'Post 2', body: 'Content for post 2', userId: 2 },
      // Add more posts as needed
    ]);

    await Comment.bulkCreate([
      { body: 'Comment 1', userId: 1, postId: 1 },
      { body: 'Comment 2', userId: 2, postId: 1 },
      // Add more comments as needed
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Call the seedDatabase function
seedDatabase();
