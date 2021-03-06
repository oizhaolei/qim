var crypto = require('crypto');
var config = require('./config.js').config;
var logger = require('log4js').getLogger('app');

var account = require('./lib/account.js');
var friend = require('./lib/friend.js');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());

app.all('/', function(req, res) {
  res.json({});
});

/**
 * check sign
 **/
checkSign = function(req, res, next) {
  logger.info();
  logger.info('----------- New Request ---------');
  logger.info('url = %s ', req.originalUrl);
  logger.info('query = %s', JSON.stringify(req.query));
  logger.info('body = %s', JSON.stringify(req.body));
  logger.info('---------------------------------');
  var loginid = req.query.loginid;
  var sign = req.query.sign;
  if (loginid !== null && sign !== null ) {
    var keyArray = [];
    for(var param in req.query) {
      keyArray.push(param);
    }
    keyArray.sort();

    var paramArray = [];
    paramArray.push(loginid);
    for(var i in keyArray) {
      var key = keyArray[i];
      var val = req.query[key];
      if (key != 'sign') {
        paramArray.push(key + val);
      }
    }
    paramArray.push(config.tttalk.secret);
    var shaSource = paramArray.join("");
    var shasum    = crypto.createHash('sha1');
    var newSign   = shasum.update(shaSource).digest('hex');
    if (sign == newSign) {
      next();
    } else {
      logger.debug('check sign error: %s, %s, %s', sign, shaSource, newSign);
      next(("invalid sign"));
    }
  } else {
    next(("invalid params"));
  }
};
//app.use(checkSign);


app.post('/register', account.register);
app.post('/login', account.login);
app.post('/getinfo', account.getinfo);

app.post('/addfriend', friend.addfriend);
app.post('/delfriend', friend.delfriend);
app.post('/getfriend', friend.getfriend);

var server = app.listen(config.app_port, function() {
  logger.debug('Listening on port %d', server.address().port);
});
