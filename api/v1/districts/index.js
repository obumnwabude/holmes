const { client } = require('../database');

module.exports = (req, res) => {
  client.query('SELECT * FROM districts;')
    .then((districts) => res.status(200).json({ districts: districts.rows }))
    .catch((error) => res.status(500).json(error));
};
