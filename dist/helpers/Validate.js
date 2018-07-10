'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, [{
    key: 'email',
    value: function email(_email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(_email).toLowerCase());
    }
  }, {
    key: 'password',
    value: function password(_password) {
      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      return re.test(String(_password));
    }
  }, {
    key: 'name',
    value: function name(_name) {
      var re = /^[a-zA-Z ]{2,30}$/;
      return re.test(String(_name));
    }
  }, {
    key: 'maritalStatus',
    value: function maritalStatus(status) {
      var acceptedStatus = ['single', 'married', 'divorced'];
      return this.name(status) && acceptedStatus.includes(status);
    }
  }, {
    key: 'create',
    value: function create(params) {
      return this.name(params['firstName']) && this.name(params['lastName']) && this.password(params['password']) && this.email(params['email']) && this.maritalStatus(params['maritalStatus']);
    }
  }]);

  return Validate;
}();

exports.default = new Validate();