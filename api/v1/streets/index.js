const { client } = require('../database');

module.exports = (req, res) => {
  client.query('SELECT * FROM streets;')
    .then((streets) => res.status(200).json({ streets: streets.rows }))
    .catch((error) => res.status(500).json(error));
};
