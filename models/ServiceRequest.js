const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  machineType: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);

module.exports = ServiceRequest;
