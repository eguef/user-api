class User {
  create(req, res) {
    const { firstName, lastName, email, maritalStatus, password} = req.body;
  }

  update(req, res) {
    res.send('working');
  }

  listUsersById(req, res) {
    res.send('working');
  }

  listUsersByMaritalStatus(req, res) {
    res.send('working');
  }

  details(req, res) {
    res.send('working');
  }

  delete(req, res) {
    res.send('working');
  }
}

export default new User();