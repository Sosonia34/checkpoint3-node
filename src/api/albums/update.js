/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../../database');

const updateAlbum = (req, res) => {
  const { id } = req.params;
  const { title, artist, year } = req.body;
  database
    .query(
      'UPDATE album SET title = $1, artist = $2, year = $3 WHERE id = $4',
      [title, artist, year, id]
    )
    .then(() => {
      res.status(200).send(`Album modified with ID: ${id}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error updating album');
    });
};

module.exports = updateAlbum;
