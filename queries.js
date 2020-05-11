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

const getDistrict = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ message: `District with ID: ${id} not found.` });
  }
  client.query(`SELECT * FROM districts WHERE id = ${id};`)
    .then((district) => res.status(200).json({ district: district.rows[0] }))
    .catch((error) => res.status(500).json(error));
};

module.exports = {
  getAllDistricts,
  getDistrict,
};
