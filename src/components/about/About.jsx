import './about.css'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {RiFolderUserLine} from 'react-icons/ri'
import David from "../../assets/david.png"

const About = () =>{

    return (
        <section id="about"> 
            <h5> Enterate </h5>
            <h2> Acerca de mí </h2>
       
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={David} alt="David Orquera" />
                    </div>
                </div>
           
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5> Experiencia </h5>
                        <small>+10 años en IT</small>
                    </article>
                    <article className="about__card">
                        <ImUsers className="about__icon"/>
                        <h5> Clientes </h5>
                        <small>+1 Cliente</small>
                    </article>
                    <article className="about__card">
                        <RiFolderUserLine className="about__icon"/>
                        <h5> Proyectos </h5>
                        <small>+3 completados</small>
                    </article>
                </div>
                <p>
                    Data Engineer con más de 11 años de experiencia en proyectos de BI, 
                    colaborando en el ciclo de vida del desarrollo de punta a punta. 
                    Creando visualizaciones principalmente con Microstrategy y Tableau. 
                    Me considero una persona con gran capacidad y habilidad para resolver 
                    problemas y conflictos complejos. Aspiró a convertirme en referente y 
                    profesional completo en proyectos Big Data en entornos Cloud, 
                    sobre todo con las tecnologías líderes del mercado. 
                </p>

                <a href="#contact" className="btn btn-primary"> Hablemos </a>
            </div>
            </div>
        </section>
    )
}

export default About;