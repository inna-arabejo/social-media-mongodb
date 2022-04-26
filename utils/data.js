const names = [
  'Aaron',
  'Aayan',
  'Smith',
  'Jones',
  'Zhi',
  'Zi',
  'Xander',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Alex',
  'Mark',
  'Tamar',
  'Sarah',
  'Nathaniel',
  'Parker',
  'Luke',
  'Albert',
  'Zack',
  'Steven',
  'Brayden',
  'Alice',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Export the functions for use in seed.js
module.exports = { getRandomName };