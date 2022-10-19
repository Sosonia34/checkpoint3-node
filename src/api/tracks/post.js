/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../../database');

const postTrack = (req, res) => {
  const { title, album_id, duration, artist_id } = req.body;
  database
    .query(
      'INSERT INTO track (title, album_id, duration, artist_id) VALUES ($1, $2, $3, $4)',
      [title, album_id, duration, artist_id]
    )
    .then(() => {
      res.status(201).send('Track added successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error adding track');
    });
};

module.exports = postTrack;
