const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the user
  const user = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {

    const fullName = getRandomName();

    user.push({
      fullName,
    });
  }

  // Add user to the collection and await the results
  await User.collection.insertMany(user);

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});