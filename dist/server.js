'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 8080 || ENV['PORT'];

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

(0, _routes2.default)(app);

app.listen(port, function () {
  console.log('Running on port', port);
});