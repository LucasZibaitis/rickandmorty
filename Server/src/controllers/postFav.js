const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender, id } = req.body;
  try {
    if (!name || !origin || !status || !image || !species || !gender || !id) {
      return res.status(401).send("Faltan datos");
    }
    const [fav, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: {
        name,
        origin,
        status,
        image,
        species,
        gender,
        id
      },
    });
    if (!created) {
      return res.status(409).send("El favorito ya existe");
    }
    const response = await Favorite.findAll();
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
