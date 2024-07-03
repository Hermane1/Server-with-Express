const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, welcome to the Express server!');
});

app.get('/about', (req, res) => {
  res.send('This server is built using Express and demonstrates basic middleware integration.');
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});