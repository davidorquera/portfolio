import { useState } from "react";
import './navbar.css';
import {FaHome} from 'react-icons/fa';
import {BiUserCircle , BiBook} from 'react-icons/bi';
/*import { RiServiceLine } from 'react-icons/ri';*/
import { MdOutlineMessage } from 'react-icons/md'

const Navbar = () =>{
    const [activeNav, setActiveNav] = useState('#')
    return (
       <nav>
           <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}> <FaHome/> </a>
           <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}> <BiUserCircle/> </a>
           <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}> <BiBook/> </a>
           
           <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}> <MdOutlineMessage/> </a>
       </nav>
    )
}
export default Navbar;


/*<a href="#service" onClick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active': ''}> <RiServiceLine/> </a>*/