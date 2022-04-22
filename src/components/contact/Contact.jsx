import './contact.css'
import {MdOutlineMail} from "react-icons/md";
import {SiWhatsapp} from "react-icons/si";

const Contact = () =>{

    return (
        <section id="contact"> 
            <h5> Pongámonos en contacto </h5>
            <h2> Contáctame </h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon'/>
                        <h4> Email </h4>
                        <h5> david_orquera@hotmail.com</h5>
                        <a href="mailto:david_orquera@hotmail.com" target="_blank"> Enviar un mensaje </a>
                    </article>
                    <article className='contact__option'>
                        <SiWhatsapp className='contact__option-icon'/>
                        <h4> WhatsApp </h4>
                        <h5> +54-9-11-7360-1641</h5>
                        <a href="https://wa.me/541173601641" target="_blank"> Enviar un mensaje </a>
                    </article>
                </div>

                <form action=''>
                    <input type="text" name='name' placeholder='Tú nombre' required/>
                    <input type="email" name='email' placeholder='Email' required/>
                    <textarea name='message' rows="8" placeholder='Mensaje' required/>
                    <button type="submit" className='btn btn-primary'> Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )

}

export default Contact;