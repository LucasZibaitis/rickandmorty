const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const {data} = await axios.get(`${URL}${id}`);
    if (!data) {
      res.status(404).json({ message: "Not found" });
    }
    const {
      name,
      gender,
      species,
      origin = origin.name,
      image,
      status,
    } = data;
    const character = { name, gender, species, origin, image, status, id };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
