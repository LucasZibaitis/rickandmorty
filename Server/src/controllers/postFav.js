const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (!name || !origin || !status || !image || !species || !gender) {
      res.status(401).send("Faltan datos");
    }
    const [fav, created] = await Favorite.findOrCreate({
      where: { name },
    });
    if (!created) {
      res.status(409).send("El favorito ya existe");
    }
    const response = await Favorite.findAll();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
