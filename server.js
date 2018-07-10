import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 8080 || ENV['PORT'];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app);

app.listen(port, () => {
  console.log('Running on port', port);
});