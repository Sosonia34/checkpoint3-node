const database = require('../database');

const getOne = (req, res) => {
  const { id } = req.params;
  database
    .query('SELECT * FROM album WHERE id = $1', [id])
    .then(([album]) => {
      res.status(200).json(album);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
module.exports = getOne;
