// Import necessary modules and models
const { User, Post, Comment } = require('./models'); // Update with your actual models

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Create users
    await User.bulkCreate([
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
    ]);

    // Create posts
    await Post.bulkCreate([
      {
        title: 'Exploring Data Analysis Techniques with Python',
        body: 'In this post, we delve into various data analysis techniques using Python, covering topics such as Pandas, NumPy, and Matplotlib.',
        userId: 1, 
      },
      {
        title: 'Machine Learning Fundamentals: An Introduction',
        body: 'An introductory guide to machine learning, discussing key concepts, algorithms, and applications in real-world scenarios. Perfect for beginners!',
        userId: 2, 
      },

    ]);

    // Create comments
    await Comment.bulkCreate([
      { body: 'Comment 1', userId: 1, postId: 1 },
      { body: 'Comment 2', userId: 2, postId: 1 },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Call the seedDatabase function
seedDatabase();
