const database = require('../database');

const getTracks = (req, res) => {
  const { id } = req.params;
  database
    .query('SELECT * FROM track WHERE album_id = $1', [id])
    .then(([tracks]) => {
      res.status(200).json(tracks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
module.exports = getTracks;
