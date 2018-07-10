import express from 'express';
import routes from './routes';

const app = express();
const port = 8080 || ENV['PORT'];

routes(app);

app.listen(port, () => {
  console.log('Running on port', port);
});