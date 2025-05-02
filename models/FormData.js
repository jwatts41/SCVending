const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  location: { type: String, required: true },
  favoriteItems: { type: String },
  itemsToSee: { type: String },
  itemsDontLike: { type: String },
  dietaryPreferences: { type: String },
  additionalComments: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FormData', FormDataSchema);
