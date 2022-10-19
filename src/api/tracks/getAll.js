/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../../database');

module.exports = (req, res) => {
  database
    .query('select * from track')
    .then(([tracks]) => {
      res.send(tracks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

