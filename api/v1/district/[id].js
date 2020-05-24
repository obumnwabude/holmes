const { client } = require('../database');

module.exports = (req, res) => {
  const id = req.query.id || req.params.id; // this second params was to make testing with express to pass correctly
  if (Number.isNaN(Number(id))) {
    return res.status(404).json({ message: `District with ID: ${id} not found.` });
  }
  return client.query(`SELECT * FROM districts WHERE id = ${id};`)
    .then((district) => {
      if (district.rows[0]) {
        res.status(200).json({ district: district.rows[0] });
      } else {
        res.status(404).json({ message: `District with ID: ${id} not found.` });
      }
    })
    .catch((error) => res.status(500).json(error));
};
