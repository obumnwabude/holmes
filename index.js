const express = require('express');
const queries = require('./queries');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/districts', queries.getAllDistricts);

module.exports = app.listen(port);
