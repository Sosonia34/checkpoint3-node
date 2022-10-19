/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint no-console: "error" */
const database = require('../../database');

const getOne = (req, res) => {
  const { id } = req.params;
  database
    .query('SELECT * FROM track WHERE id = 1', [id])
    .then(([track]) => {
      res.status(200).json(track);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

module.exports = getOne;