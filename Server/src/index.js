const PORT = 3001;
const server = require("./app");
const { conn } = require("./DB_connection");

// server.listen(PORT, () => {
//   console.log("Server raised in port: " + PORT);
// });

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  .catch((err) => console.log(err));
