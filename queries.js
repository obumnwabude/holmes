const { Client } = require('pg');

const client = new Client(process.env.PG_URI);
client.connect().then(() => {}).catch((error) => error);

/**
 * Queries the database and returns all districts
 */
const getAllDistricts = (req, res) => {
  client.query('SELECT * FROM districts;')
    .then((districts) => res.status(200).json({ districts: districts.rows }))
    .catch((error) => res.status(500).json(error));
};

module.exports = {
  getAllDistricts,
};
