import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { id } = props;
  const [isFav, setIsFav] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav(props));
    }
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (parseInt(fav.id) === parseInt(id)) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.favoriteButton} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.favoriteButton} onClick={handleFavorite}>
          🤍
        </button>
      )}
      {!props.isFavoriteView && (
        <button
          className={styles.closeButton}
          onClick={() => props.onClose(props.id)}
          disabled={props.isFavoriteView}
        >
          X
        </button>
      )}
      <Link to={`/detail/${props.id}`} className={styles.detailLink}>
        <h2 className={styles.name}>{props.name}</h2>
      </Link>
      <h2 className={styles.status}>Status: {props.status}</h2>
      <h2 className={styles.species}>Specie: {props.species}</h2>
      <h2 className={styles.gender}>Gender: {props.gender}</h2>
      <h2 className={styles.origin}>Origin: {props.origin}</h2>
      <img src={props.image} alt="" className={styles.imgCard} />
    </div>
  );
}

export default Card;
