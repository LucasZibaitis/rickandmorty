import React from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [id, setID] = React.useState('')

   const handleChange = event => {setID(event.target.value)}
   const handleSearch = () => {props.onSearch(id)}

   return (
      <div className={styles.containerSearchBar}>
         <button onClick={handleSearch} className={styles.botonNavAgregar}>Agregar</button>
         <input onChange={handleChange} type='search' value={id} className={styles.inputNav}/>
         <button onClick={props.randomChar} className={styles.botonNavRandom}>Random</button>
      </div>
   );
}

