let myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const id = (req.params.id);
  const filteredFavorites = myFavorites.filter(
    (favorite) => favorite.id !== id
  );
  myFavorites = filteredFavorites;
  res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
