import user from '../controllers/User';

export default (app) => {
  app.post('/api/v1/users', user.create);
  app.put('/api/v1/users/:id', user.update);
  app.delete('/api/v1/users/:id', user.delete);
  app.get('/api/v1/users/:status/marital-status', user.listUsersByMaritalStatus);
  app.get('/api/v1/users', user.listUsersById);
  app.get('/api/v1/users/:id', user.details);
}