const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Location = require('../models/Locations'); // Path to Location model

dotenv.config(); // Ensure this loads your environment variables from .env

// Check if MONGO_URI exists in .env
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in .env');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Location.create({ name: 'Greenville, NC', company: 'Coastal Med Transport' });
    console.log('location added');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

