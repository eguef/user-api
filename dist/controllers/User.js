'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: 'create',
    value: function create(req, res) {
      res.send('working');
    }
  }, {
    key: 'update',
    value: function update(req, res) {
      res.send('working');
    }
  }, {
    key: 'listUsersById',
    value: function listUsersById(req, res) {
      res.send('working');
    }
  }, {
    key: 'listUsersByMaritalStatus',
    value: function listUsersByMaritalStatus(req, res) {
      res.send('working');
    }
  }, {
    key: 'details',
    value: function details(req, res) {
      res.send('working');
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      res.send('working');
    }
  }]);

  return User;
}();

exports.default = new User();