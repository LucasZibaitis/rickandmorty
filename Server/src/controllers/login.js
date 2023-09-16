const usuarios = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  const usuarioEncontrado = usuarios.find((usuario) => {
    return usuario.email === email && usuario.password === password;
  });
  if (usuarioEncontrado) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
}

module.exports = login;
