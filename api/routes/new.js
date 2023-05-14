const express = require('express');

const router = express.Router();
const sgMail = require('../services/sendgrid');

router.post('/api/mail',(req,res)=>{
    const { to, subject, text, html } = req.body;

    const msg = {
        to,
        from: 'davidorquera028@gmail.com',
        subject,
        text,
        html
    }

    sgMail.send(smg)
    .then( msg =>{
        res.status(201).send({sucess: true})
    })
    .catch(err => {
        res.status(err.code).send(err.message)
    })
})

module.exports = router;