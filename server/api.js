var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var config     = require('./config');
var api        = module.exports = express();

// configuracion
api.set('superSecret', config.sessionSecret); // secret variable


api.use(logger('dev'));
api.use(bodyParser.urlencoded({
    extended: true
}));
api.use(bodyParser.json());

require('./users/routes')(api);
require('./events/routes')(api);
require('./lectures/routes')(api);
require('./questions/routes')(api);

module.exports = api;
