import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import styles from './Card.module.css'

export function Card(props) {

   const {myFavorites, id} = props
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         props.removeFav(props.id)
      } else {
         setIsFav(true)
         props.addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         {isFav ? (<button className={styles.favoriteButton} onClick={handleFavorite}>❤️</button>) : (<button className={styles.favoriteButton} onClick={handleFavorite}>🤍</button>)}
         {!props.isFavoriteView && (<button className={styles.closeButton} onClick={() => props.onClose(props.id)} disabled={props.isFavoriteView}>X</button>)}
         <Link to={`/detail/${props.id}`} className={styles.detailLink}>
         <h2 className={styles.name}>{props.name}</h2>
         </Link>
         <h2 className={styles.status}>Status: {props.status}</h2>
         <h2 className={styles.species}>Specie: {props.species}</h2>
         <h2 className={styles.gender}>Gender: {props.gender}</h2>
         <h2 className={styles.origin}>Origin: {props.origin}</h2>
         <img src={props.image} alt='' className={styles.imgCard} />
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return ({addFav: (character) => {dispatch(addFav(character))}, removeFav: (id) => {dispatch(removeFav(id))}})
}

export function mapStateToProps(state) {
   return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)


