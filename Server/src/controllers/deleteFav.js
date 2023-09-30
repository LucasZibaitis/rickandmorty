const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {

    const {id} = req.params

    try {
        const deletedFavorite = await Favorite.destroy({
            where: {id: id}
        })
        if (deletedFavorite === 0) {res.status(404).send("El id no fue encontrado.")}
        const allFavorites = await Favorite.findAll()
        res.status(200).json(allFavorites)
    }
    catch(error){res.status(500).json({error: error.message})}

};

module.exports = deleteFav;
