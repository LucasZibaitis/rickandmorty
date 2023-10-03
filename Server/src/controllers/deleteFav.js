const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFavorite = await Favorite.destroy({
      where: { id: id },
    });
    if (deletedFavorite === 0) {
      return res.status(404).send("El id no fue encontrado.");
    }
    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
