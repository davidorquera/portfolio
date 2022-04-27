import './contact.css'
import {MdOutlineMail} from "react-icons/md";
import {SiWhatsapp} from "react-icons/si";
import React, { useEffect, useState} from "react";
import axios from 'axios';

const Contact = () =>{
    const [error, setError] = useState(null);
    const [sent, setSent] = useState(false);

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [html, setHtml] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/api/mail',{to,subject,text,html})
        .then( msg => {
            setSent(true);
            setError(null);
        } )
        .catch( err => {
            setError(err.response.data)
        })
    }

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
                </div>
                <div className="contact__options">
                    <article className='contact__option'>
                        <SiWhatsapp className='contact__option-icon'/>
                        <h4> WhatsApp </h4>
                        <h5> +54-9-11-7360-1641</h5>
                        <a href="https://wa.me/541173601641" target="_blank"> Enviar un mensaje </a>
                    </article>
                </div>

                
            </div>
        </section>
    )

}

export default Contact;
/*
<form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Tú nombre' value={to} onChange={(e) => setTo(e.target.value)} required/>
                    <input type="email" name='email' placeholder='Email' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
                    <textarea name='message' rows="8" placeholder='Mensaje' value={text} onChange={(e) => setText(e.target.value)} required/>
                    <button type="submit" className='btn btn-primary'> Enviar Mensaje</button>
                </form>*/