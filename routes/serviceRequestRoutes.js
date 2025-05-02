const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

// POST route to handle form submission
router.post('/service-request', async (req, res) => {
  const { companyName, location, machineType, email, phone } = req.body;

  try {
    const newRequest = new ServiceRequest({
      companyName,
      location,
      machineType,
      email,
      phone
    });

    await newRequest.save();

    res.status(200).json({ message: 'Service request submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting service request.' });
  }
});

module.exports = router;
