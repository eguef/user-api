'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Validate = require('../helpers/Validate');

var _Validate2 = _interopRequireDefault(_Validate);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    _classCallCheck(this, User);

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.listUsersById = this.listUsersById.bind(this);
    this.listUsersByMaritalStatus = this.listUsersByMaritalStatus.bind(this);
    this.details = this.details.bind(this);
    this.delete = this.delete.bind(this);
  }

  _createClass(User, [{
    key: 'create',
    value: function create(req, res) {
      var _this = this;

      this.validateParams(res, _Validate2.default.create(req.body));
      var _req$body = req.body,
          firstName = _req$body.firstName,
          lastName = _req$body.lastName,
          email = _req$body.email,
          maritalStatus = _req$body.maritalStatus,
          password = _req$body.password;

      var run_method = function run_method(record) {
        if (record && _this.unique) {
          throw 'User exists for this email';
        }
        console.log(req.body);
        _models2.default.User.create({ firstName: firstName, lastName: lastName, email: email, maritalStatus: maritalStatus, password: password, deprecatedAt: null }).then(function (newRecord) {
          res.status(200).send(newRecord);
        }).catch(function (err) {
          res.send(err.message);
        });
      };

      this.findRecord(res, { email: req.body.email }, run_method);
    }
  }, {
    key: 'update',
    value: function update(req, res) {
      var _this2 = this;

      var run_method = function run_method(record) {
        if (record == null) {
          throw new AppError(_this2.name + ' does not exist', 404);
        }

        record.update(req.body).then(function (updatedRecord) {
          res.status(200).send(updatedRecord);
        }).catch(function (err) {
          res.send(err.message);
        });
      };

      this.findRecord(res, { id: req.body.id }, run_method);
    }
  }, {
    key: 'listUsersById',
    value: function listUsersById(req, res) {
      _models2.default.User.findAll({ where: { deprecated_at: null } }).then(function (records) {
        res.status(200).send(records);
      }).catch(function (err) {
        res.send(err);
      });
    }
  }, {
    key: 'listUsersByMaritalStatus',
    value: function listUsersByMaritalStatus(req, res) {
      _models2.default.User.findAll({ where: { deprecated_at: null, marital_status: req.body.status } }).then(function (records) {
        res.status(200).send(records);
      }).catch(function (err) {
        res.send(err);
      });
    }
  }, {
    key: 'details',
    value: function details(req, res) {
      var _this3 = this;

      var run_method = function run_method(record) {
        if (record == null) {
          throw new AppError(_this3.name + ' does not exist', 404);
        }
        res.status(200).send(record);
      };
      this.findRecord(res, { id: req.params.id }, run_method);
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      var _this4 = this;

      var run_method = function run_method(record) {
        if (record == null) {
          throw new AppError(_this4.name + ' does not exist', 404);
        }

        var currentTime = new Date();
        record.update({ deprecatedAt: currentTime.toISOString() }).then(function (deletedRecord) {
          res.status(200).send(deletedRecord);
        }).catch(function (err) {
          res.send(err);
        });
      };

      this.findRecord(res, { id: req.params.id }, run_method);
    }
  }, {
    key: 'validateParams',
    value: function validateParams(res, boolean) {
      if (!boolean) {
        res.status(409).send('Please input valid parameters');
      }
    }
  }, {
    key: 'findRecord',
    value: function findRecord(res) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { id: this.id };
      var run_method = arguments[2];

      query['deprecatedAt'] = null;
      _models2.default.User.findOne({ where: query }).then(function (record) {
        run_method(record);
      }).catch(function (err) {
        var status = err && err.status ? err.status : 500;
        res.status(status).send(err);
      });
    }
  }]);

  return User;
}();

exports.default = new User();