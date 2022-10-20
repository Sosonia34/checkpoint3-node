/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../../database');

const getAll = (req, res) => {
  database
    .query('SELECT * FROM album')
    .then((albums) => {
      res.status(200).json(albums.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
module.exports = getAll;
