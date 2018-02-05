var mongoose = require('mongoose');

var locationModel = new mongoose.Schema({
  location: {type: String, required: true},
  country: {type: String, required: true},
  state: {type: String, required: true},
  city: String,
  zip: Number,
  lat: Number,
  long: Number
});

module.exports = mongoose.model('Locations', locationModel);
