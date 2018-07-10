import express from 'express';

const app = express();
const port = 8080 || ENV['PORT'];

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(port, () => {
  console.log('Running on port', port);
});