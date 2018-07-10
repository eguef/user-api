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
        throw new AppError(`${this.name} does not exist`, 404);
      }

      record.update(req.body)
      .then((updatedRecord) => { res.status(200).send(updatedRecord); })
      .catch((err) => { res.send(err.message); });
    }


    this.findRecord(res, {id: req.body.id}, run_method);
  }

  listUsersById(req, res) {
    db.User.findAll({where: { deprecated_at: null }})
    .then((records) => { res.status(200).send(records)})
    .catch((err) => { res.send(err); });
  }

  listUsersByMaritalStatus(req, res) {
    db.User.findAll({where: { deprecated_at: null, marital_status: req.body.status }})
    .then((records) => { res.status(200).send(records)})
    .catch((err) => { res.send(err); });
  }

  details(req, res) {
    const run_method = (record) => {
      if (record == null) {
        throw new AppError(`${this.name} does not exist`, 404);
      }
      res.status(200).send(record);
    }
    this.findRecord(res, {id: req.params.id}, run_method);
  }

  delete(req, res) {
    const run_method = (record) => {
      if (record == null) {
        throw new AppError(`${this.name} does not exist`, 404);
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