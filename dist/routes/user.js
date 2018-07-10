'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../controllers/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.post('/api/v1/users', _User2.default.create), app.put('/api/v1/users/:id', _User2.default.update), app.delete('/api/v1/users', _User2.default.create), app.get('/api/v1/users/:status/marital-status', _User2.default.listUsersByMaritalStatus);
  app.get('/api/v1/users', _User2.default.listUsersById);
  app.get('/api/v1/users/:id', _User2.default.details);
};