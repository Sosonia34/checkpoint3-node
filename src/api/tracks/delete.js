/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../database');

const deleteTrack = (req, res) => {
  const { id } = req.params;
  database
    .query('DELETE FROM track WHERE id = $1', [id])
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting track');
    });
};

module.exports = deleteTrack;
