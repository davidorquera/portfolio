import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';

const Portfolio = () =>{

    return (
       <section id="portfolio"> 
        <h5> Mi trabajos recientes </h5>
        <h2> Portfolio </h2>

        <div className="container portfolio__container">
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