import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'

export default function Detail () {

    const { id } = useParams ()

    const [character, setCharacter] = useState ({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

        return (
            <div className={styles.detailContainer}>
            {character ? (
              <div className={styles.characterInfo}>
                <h1 className={styles.characterName}>{character.name}</h1>
                <h1 className={styles.characterDetail}>{character.status}</h1>
                <h1 className={styles.characterDetail}>{character.species}</h1>
                <h1 className={styles.characterDetail}>{character.gender}</h1>
                <h1 className={styles.characterDetail}>{character.origin ? character.origin.name:""}</h1>
                <img className={styles.characterImage} src={character.image} width={600}/>
              </div>
            ) : (
              <p>Cargando personaje...</p>
            )}
            </div>
        );
}