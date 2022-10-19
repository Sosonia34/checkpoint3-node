/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../database');

const postAlbum = (req, res) => {
  const { title, artist_id } = req.body;
  database
    .query('INSERT INTO album (title, artist_id) VALUES ($1, $2)', [
      title,
      artist_id,
    ])
    .then(() => {
      res.status(201).send('Album added successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error adding album');
    });
};

module.exports = postAlbum;
