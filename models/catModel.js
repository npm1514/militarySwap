var mongoose = require('mongoose');

var catModel = new mongoose.Schema({
});

module.exports = mongoose.model('Cats', catModel);
