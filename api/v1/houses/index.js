const { client } = require('../database');

module.exports = (req, res) => {
  client.query('SELECT houses FROM streets;')
    .then((houses) => res.status(200).json({
      houses: (houses.rows.reduce((house1, house2) => ({
        houses: house1.houses + house2.houses,
      }))).houses,
    }))
    .catch((error) => res.status(500).json(error));
};
