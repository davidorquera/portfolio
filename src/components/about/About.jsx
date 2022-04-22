import './about.css'
import {FaAward} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {RiFolderUserLine} from 'react-icons/ri'

const About = () =>{

    return (
        <section id="about"> 
            <h5> Enterate </h5>
            <h2> Acerca de mí </h2>
       
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src="https://p5-hall-of-fame.s3.amazonaws.com/enero2022/David+orquera.JPG" alt="David Orquera" />
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
                Decidí seguir creciendo en el mundo IT. En 4 meses realicé un Coding Bootcamp de más de 800hs que me dio las 
                herramientas principales para hacer un upgrade de tecnologías y metodologías de trabajo. </p>
                <p>
                Anteriormente, trabajé más de 10 años en IT en el sector BI, esto me permite tener: excelente 
                capacidad analítica, trabajo en equipo y muy buena comunicación. Algunas de las tareas que realicé: 
                dialogar con los clientes internos, armar los relevamientos y lideré un equipo de 3 desarrolladores
                aplicando metodologías ágiles. Crear soluciones eficientes para la toma de decisiones era mi prioridad.
                </p>
                <a href="#contact" className="btn btn-primary"> Hablemos </a>
            </div>
            </div>
        </section>
    )
}

export default About;