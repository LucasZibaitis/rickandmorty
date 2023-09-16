import styles from './About.module.css'

export default function About () {

    return (
        <div className={styles.containerAbout}>
        <h1 className={styles.headingAbout}>Lucas Zibaitis</h1>
        <p className={styles.descriptionAbout}>Hola! Soy Lucas Zibaitis, tengo 23 años y soy de Buenos Aires.
            Soy guitarrista y cantante; y además estoy recibido de productor musical.
            Actualmente estoy estudiando la carrera de Desarrollo Web en soyHenry.
        </p>
        <img src='https://media.licdn.com/dms/image/D4D03AQEfzyneqdEzLg/profile-displayphoto-shrink_800_800/0/1665425693485?e=2147483647&v=beta&t=hpyprUNZ_dhJ_7-us8nGKAdE1pVgkElbzsUayScn23Q' alt='' className={styles.profileImageAbout}></img>
        </div>
    )
}