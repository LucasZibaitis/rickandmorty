import React, { useState } from "react";
import validate from "../validation";
import styles from "./Form.module.css"

export default function Form (props) {

    const [userData, setuserData] = useState ({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState ({
        email:"",
        password:""
    })

    const handleChange = event => {
        setuserData({...userData, [event.target.name]: event.target.value})
        setErrors(validate({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = event => {
        event.preventDefault(props.login(userData))
    }

    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.labelForm}>EMAIL:</label>
                <input placeholder="Escribe tu email..." name="email" type="text" value={userData.email} onChange={handleChange} 
                className={errors.email ? `${styles.warning}` : styles.inputForm}></input>
                <p className={styles.danger}>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="password" className={styles.labelForm}>PASSWORD:</label>
                <input placeholder="Escribe tu password..." name="password" type="text" value={userData.password} onChange={handleChange} 
                className={errors.password ? `${styles.warning}` : styles.inputForm}></input>
                <p className={styles.danger}>{errors.password}</p>
            </div>
            <div>
                <button type="submit" className={styles.buttonForm}>LOG IN</button>
            </div>
        </form>
        </div>
    )
}