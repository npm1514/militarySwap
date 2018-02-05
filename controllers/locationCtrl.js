var locationModel = require('./../models/locationModel.js');

module.exports = {
  create: function(req, res) {
    var location = new locationModel(req.body);
    location.save(function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  read: function(req, res) {
    locationModel
    .find(req.query)
    .exec(function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  getOne: function(req, res) {
    locationModel
    .findById(req.params.id)
    .exec(function (err, result) {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res){
    locationModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res){
    locationModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  }
};
