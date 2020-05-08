const express = require('express');
const { Client } = require('pg');

const app = express();
const client = new Client(process.env.PG_URI);
client.connect().then(() => {}).catch((error) => error);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/districts', (req, res) => {
  client.query('SELECT * FROM districts;')
    .then((districts) => res.status(200).json({ districts: districts.rows }))
    .catch((error) => res.status(500).json(error))
    .finally(() => client.end());
});

module.exports = app.listen(port);
