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

/**
 * Queries the database and returns a particular district with id found in the URL
 */
const getDistrict = (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    return res.status(400).json({ message: `District with ID: ${id} not found.` });
  }
  return client.query(`SELECT * FROM districts WHERE id = ${id};`)
    .then((district) => res.status(200).json({ district: district.rows[0] }))
    .catch((error) => res.status(500).json(error));
};

/**
 * Queries the database and returns all streets
 */
const getAllStreets = (req, res) => {
  client.query('SELECT * FROM streets;')
    .then((streets) => res.status(200).json({ streets: streets.rows }))
    .catch((error) => res.status(500).json(error));
};


/**
 * Queries the database and returns a particular street with id found in the URL
 */
const getStreet = (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    return res.status(400).json({ message: `Street with ID: ${id} not found.` });
  }
  return client.query(`SELECT * FROM streets WHERE id = ${id};`)
    .then((street) => res.status(200).json({ street: street.rows[0] }))
    .catch((error) => res.status(500).json(error));
};

/**
 * Queries the database and returns the sum of all houses in Holmes
 */
const getHouses = (req, res) => {
  client.query('SELECT houses FROM streets;')
    .then((houses) => res.status(200).json({
      houses: (houses.rows.reduce((house1, house2) => ({
        houses: house1.houses + house2.houses,
      }))).houses,
    }))
    .catch((error) => res.status(500).json(error));
};

module.exports = {
  getAllDistricts,
  getDistrict,
  getAllStreets,
  getStreet,
  getHouses,
};
