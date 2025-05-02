const express = require('express');
const router = express.Router();
const Location = require('../models/Locations');

// GET /api/locations - Get all vending locations
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
