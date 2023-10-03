import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const charFavorites = myFavorites.map((personaje) => (
    <Card
      key={personaje.id}
      id={personaje.id}
      name={personaje.name}
      status={personaje.status}
      species={personaje.species}
      gender={personaje.gender}
      origin={personaje.origin}
      image={personaje.image}
      isFavoriteView={true}
    />
  ));

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div className={styles.favoritesContainer}>
        <div className={styles.selectContainer}>
          <select className={styles.selectBox} onChange={handleOrder}>
            <option value="S">Sin Orden</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <select className={styles.selectBox} onChange={handleFilter}>
            <option value="Todos">Mostrar Todos</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <div className={styles.cardContainer}>{charFavorites}</div>
    </div>
  );
}

export default Favorites;
