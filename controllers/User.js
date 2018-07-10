import validate from '../helpers/Validate';
import db from '../models';
class User {

  constructor () {

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.listUsersById = this.listUsersById.bind(this);
    this.listUsersByMaritalStatus = this.listUsersByMaritalStatus.bind(this);
    this.details = this.details.bind(this);
    this.delete = this.delete.bind(this);
  }

  create(req, res) {
    this.validateParams(res, validate.create(req.body));
    const { firstName, lastName, email, maritalStatus, password} = req.body;
    const run_method = (record) => {
      if (record && this.unique) {
        throw 'User exists for this email';
      }
      console.log(req.body);
      db.User.create({firstName: firstName, lastName: lastName, email: email, maritalStatus: maritalStatus, password:password, deprecatedAt: null})
      .then((newRecord) => { res.status(200).send(newRecord); })
      .catch((err) => { res.send(err.message); });
    }

    this.findRecord(res, {email: req.body.email}, run_method);
  }

  update(req, res) {
    const run_method = (record) => {
      if (record == null) {
        throw 'User exists for this email';
      }

      record.update(req.body)
      .then((updatedRecord) => { res.status(200).send(updatedRecord); })
      .catch((err) => { res.send(err.message); });
    }


    this.findRecord(res, {id: req.params.id}, run_method);
  }

  listUsersById(req, res) {
    db.User.findAll({where: { deprecatedAt: null }})
    .then((records) => { res.status(200).send(records)})
    .catch((err) => { res.send(err); });
  }

  listUsersByMaritalStatus(req, res) {
    db.User.findAll({where: { deprecatedAt: null, maritalStatus: req.params.status }})
    .then((records) => { res.status(200).send(records)})
    .catch((err) => { res.send(err); });
  }

  details(req, res) {
    const run_method = (record) => {
      if (record == null) {
        throw 'User does not exists for this email';
      }
      res.status(200).send(record);
    }
    this.findRecord(res, {id: req.params.id}, run_method);
  }

  delete(req, res) {
    const run_method = (record) => {
      if (record == null) {
        throw 'User does not exists for this email';
      }

      const currentTime = new Date();
      record.update({deprecatedAt: currentTime.toISOString() })
      .then((deletedRecord) => { res.status(200).send(deletedRecord); })
      .catch((err) => { res.send(err); });
    }

    this.findRecord(res, {id: req.params.id}, run_method);
  }

  validateParams(res, boolean) {
    if (!boolean) {
      res.status(409).send('Please input valid parameters');
    }
  }

  findRecord (res, query = {id: this.id}, run_method) {
    query['deprecatedAt'] = null; 
    db.User.findOne({ where: query }).then((record) => {
      run_method(record);
    }).catch((err) => {
      const status = err && err.status ? err.status : 500;
      res.status(status).send(err);
    });
  }
}

export default new User();