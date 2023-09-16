import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

export default function Nav (props) {
    return (
        <div className={styles.containerBack}>
            <div className={styles.containerNav}>
                <Link to="/about">
                <button className={styles.botonNav}>About</button>
                </Link>

                <Link to="/home">
                <button className={styles.botonNav}>Home</button>
                </Link>

                <Link to="/favorites">
                <button className={styles.botonNav}>Favorites</button>
                </Link>

                <Link to="/">
                    <button onClick={props.logout} className={styles.botonNavLogOut}>Log Out</button>
                </Link>

                <hr className={styles.hrNav}></hr>
                
                <SearchBar onSearch={props.onSearch} randomChar={props.randomChar} />
            </div>
        </div>
    )
}