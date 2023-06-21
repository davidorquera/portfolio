import './header.css'
import Buttons from "./Buttons";
import HeaderSocial from "./HearderSocial";
import David from "../../assets/david_presentacion.svg"

const Header = () =>{

    return (
     <header>
         <div className="container header__container">
            <h5> Hola! Soy </h5>
            <h1> David Orquera </h1>
            <h5 className="text-light"> Data Engineer / Fullstack Developer</h5>
            <Buttons/>
            <HeaderSocial/>
            
            <div className="me"> 
                <img src={David} alt="yo"/>
            </div>
            <a href="#contact" className="scroll_down"> Scroll hacía abajo</a>
         </div>
     </header>
    )

}

export default Header;