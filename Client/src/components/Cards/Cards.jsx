import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const personajes = props.characters;
  const listaPer = personajes.map((personaje) => (
    <Card
      key={personaje.id}
      id={personaje.id}
      name={personaje.name}
      status={personaje.status}
      species={personaje.species}
      gender={personaje.gender}
      origin={personaje.origin.name}
      image={personaje.image}
      onClose={props.onClose}
    />
  ));
  return <div className={styles.cardList}>{listaPer}</div>;
}
