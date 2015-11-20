var util = require('util');
var config = require("../config.js").config;
var logger = require('log4js').getLogger('account.js');

exports.register = function(req, res, next) {
  var name = req.body.name;
  var password = req.body.password;

  res.json({
    ret_code : 0,
    ret_msg : "OK"
  });

};
exports.login = function(req, res, next) {
  var name = req.body.name;
  var password = req.body.password;

  res.json({
    ret_code : 0,
    ret_msg : "OK",
    ret_data : {
      Identifier : name,
      UserSig : config.accounts[name]
    }
  });

};
exports.getinfo = function(req, res, next) {
  var name = req.body.name;

  res.json({
    ret_code : 0,
    ret_msg : "OK"
  });

};
