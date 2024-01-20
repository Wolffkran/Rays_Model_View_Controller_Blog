const Post = require('../models/Post'); 

const posts = [
    {
        title: 'Exploring Data Analysis Techniques with Python',
        content: 'In this post, we delve into various data analysis techniques using Python, covering topics such as Pandas, NumPy, and Matplotlib.',
        author: user1._id,
      },
      {
        title: 'Machine Learning Fundamentals: An Introduction',
        content: 'An introductory guide to machine learning, discussing key concepts, algorithms, and applications in real-world scenarios. Perfect for beginners!',
        author: user2._id,
      },
];

// Function to seed posts
const seedPosts = async () => {
  try {
    // Clear existing posts
    await Post.deleteMany({});
    // Insert seed posts
    await Post.insertMany(posts);
    console.log('Posts seeded successfully!');
  } catch (error) {
    console.error('Error seeding posts:', error);
  }
};

module.exports = seedPosts;
