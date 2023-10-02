const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("Faltan datos");
    }
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password },
    });
    if (!created) {
      res.status(409).send("El usuario ya existe");
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;

