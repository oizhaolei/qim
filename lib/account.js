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
      Identifier : "zhaolei",
      UserSig : "eJx10E9PgzAYx-E7r6LhqtEVyqgmHpbhZCIzG9otuxCkpdRttJTur-G9u*ASufhcv5-klzxfFgDAfntJbrI8l9vKpOaomA3ugQ1d6NvXf10pQdPMpK6mvx31zue4PuwodlBCszQrDNOtcrw758w6RFBWGVGICziVmVwz0QENXaXt2v8zjeBtjB-fh*Np4FW3x6g89JtpKK*iAZcTwpPkhBfDmmj1pNyltyZxFG5n*zHPF68EB6vdKMEfsaiLMtzUn2Q0caLZnNG41stgngy4D5-lQ2fSiM3lLwj1Ie4hjDp1x3QjZNUC2-q2fgAJ5F5n"
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
