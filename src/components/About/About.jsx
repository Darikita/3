import styles from './About.module.css'
import Logo from '../../img/logoHenry.png'
import imgNav from './About.module.css'

export default function About(props){
    return(
        <div>
            <div className={styles.container}>
                <h1 className={styles.h1}>¿Cómo está el clima hoy?</h1>
                <p><span> Es una Aplicación del </span>clima a tiempo real, que permite acceder a datos climáticos de ciudades y países en el mundo.
Solo tienes que escribir la ciudad o país que buscas y hacer click en agregar, te aparecerá una tarjeta con datos básicos, si deseas mas información solo haz click en ver más detalles.
</p>
                <p>Realizada por: Dárika Valdez.</p>
                <div>
                <p>Estudiante de Full Stack Developer en “SoyHenry”<img className={imgNav} src={Logo} alt="Logo Henry" /></p> 
                </div>
                <p> Hecho con Tecnología: HTML, CSS, Javascript, y React.</p>
            </div>
        </div>
        
    )
}