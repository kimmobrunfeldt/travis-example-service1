const express = require('express');
const morgan = require('morgan');
const request = require('request-promise');

const app = express();
app.use(morgan('dev'));

app.get('/api/test', (req, res) => {
  console.log('Service 1: -> /api/test');

  request('http://localhost:4000/api/test', { json: true })
    .then(data => res.json(data))
    .catch(err => {
      res.status(500);
      res.send(err);

      console.error(err);
    });
});

app.listen(3000, function () {
  console.log('Service 1 listening on port 3000!')
});