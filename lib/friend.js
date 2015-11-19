var util = require('util');
var config = require("../config.js").config;
var logger = require('log4js').getLogger('friend.js');

exports.addfriend = function(req, res, next) {
  var name = req.body.name;
  var friendname = req.body.friendname;

  res.json({
    ret_code : 0,
    ret_msg : "OK"
  });
};

exports.delfriend = function(req, res, next) {
  var name = req.body.name;
  var friendname = req.body.friendname;

  res.json({
    ret_code : 0,
    ret_msg : "OK"
  });
};

exports.getfriend = function(req, res, next) {
  var name = req.body.name;

  res.json({
    ret_code : 0,
    ret_msg : "OK",
    ret_data : [{
      username : ""
    }]
  });
};
