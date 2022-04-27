import './footer.css'

const Footer = () =>{

    return (
       <footer> 
           <a href="#" className="footer__logo"> David Orquera</a>

           <ul className="permalinks">
               <li> <a href="#"> Home</a></li>
               <li> <a href="#about"> Acerca de mí</a></li>
               <li> <a href="#experience"> Experiencia</a></li>
               <li> <a href="#portfolio"> Portfolio</a></li>
               <li> <a href="#contact"> Contacto</a></li>
           </ul>

           <div className="footer__copyright">
               <small>&copy; David Orquera. All rights reserved </small>
               
           </div>
        </footer>
    )

}

export default Footer;