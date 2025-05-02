const express = require('express');
const router = express.Router();

// GET route to test
router.get('/test', (req, res) => {
  res.json({ message: 'API test route works!' });
}); 


module.exports = router;
 