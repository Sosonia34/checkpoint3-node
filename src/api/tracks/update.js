/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
/ eslint-disable no-console */
const database = require('../../database');

const updateTrack = (req, res) => {
  const { id } = req.params;
  const {
    name,
    album_id,
    media_type_id,
    genre_id,
    composer,
    milliseconds,
    bytes,
    unit_price,
  } = req.body;
  database
    .query(
      'UPDATE track SET name = $1, album_id = $2, media_type_id = $3, genre_id = $4, composer = $5, milliseconds = $6, bytes = $7, unit_price = $8 WHERE id = $9',
      [
        name,
        album_id,
        media_type_id,
        genre_id,
        composer,
        milliseconds,
        bytes,
        unit_price,
        id,
      ]
    )
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error updating track');
    });
};

module.exports = updateTrack;
