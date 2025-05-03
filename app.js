const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const locationRoutes = require('./routes/locationRoutes');
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');

dotenv.config(); 
const app = express();

// Middleware
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 
// Log every incoming request
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.originalUrl}`);
  next();
});
 

// Routes
app.use('/api', require('./routes/api')); 
app.use('/api/locations', locationRoutes);
app.use('/api/service-request', serviceRequestRoutes);




// Start server after connecting to MongoDB
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB(); 
    console.log('MongoDB connected');
    
    // start the server
    const PORT = process.env.PORT || 3000;  
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); 
  }
};


startServer();

