const database = require('../database');

const deleteAlbum = (req, res) => {
  const { id } = req.params;
  database
    .query('DELETE FROM album WHERE id = $1', [id])
    .then(() => {
      res.status(200).send(`Album deleted with ID: ${id}`);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error deleting album');
    });
};

module.exports = deleteAlbum;
