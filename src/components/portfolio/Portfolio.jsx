import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import ANAC from '../../assets/anac.png';

const Portfolio = () =>{

    return (
       <section id="portfolio"> 
        <h5> Mi trabajos recientes </h5>
        <h2> Portfolio </h2>

        <div className="container portfolio__container">
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                 <img src={ANAC} alt="Looker: ANAC" />
                </div>
                <h3> Dashboard Looker: Estadística de vuelos 2022-2023 Argentina </h3>
                <div className='portfolio__item-btn'>
                    <a href='https://lookerstudio.google.com/reporting/e9c8501c-9f65-41ff-9509-a0924fe73c7c' className='btn btn-primary' target="_blank"> Live Demo </a>
                </div>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                 <img src={IMG1} alt="Turnos Web" />
                </div>
                <h3> Turnos Web: Reservas de turnos presenciales</h3>
                <div className='portfolio__item-btn'>
                    <a href='https://github.com/davidorquera' className='btn' target="_blank"> Github </a>
                    <a href='https://turnosweb-project.netlify.app/' className='btn btn-primary' target="_blank"> Live Demo </a>
                </div>
            </article>
        </div>
       </section>
    )

}

export default Portfolio;