const express = require('express');
const queries = require('./queries');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/v1/districts', queries.getAllDistricts);
app.get('/api/v1/district/:id', queries.getDistrict);
app.get('/api/v1/streets', queries.getAllStreets);

module.exports = app.listen(port);
