const express = require('express');
const router = express.Router();
const Location = require('../models/Locations');
const FormData = require('../models/FormData');

// GET for Get all vending locations
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST route for handling feedback form submission
router.post('/feedback', async (req, res) => {
    try {
      const { location, favoriteItems, desiredItems, dislikedItems, dietaryPreferences, additionalComments } = req.body;
  
      // Create a new FormData object
      const feedback = new FormData({
        location,
        favoriteItems,
        desiredItems,
        dislikedItems,
        dietaryPreferences,
        additionalComments,
      });
  
      // Saves the form data to MongoDB
      await feedback.save();
  
      // Sends a success response
      res.status(200).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting feedback. Please try again later.' });
    }
  });

module.exports = router;
 