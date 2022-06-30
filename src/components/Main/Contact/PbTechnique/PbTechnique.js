import React, { useState } from 'react';
import './PbTechnique.scss'
// import axios from 'axios';

import '../Contact.scss';

const ContactForm = () => {
    const [status, setStatus] = useState('Envoyer');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(details)
        });
        setStatus('Envoyer');
        let result = await response.json();
        alert(result.status);
    };

    return (
        <form
            // onSubmit={handleSubmit}
            className='contact_form'
            action='mailto:bibino.contact@gmail.com' // TODO Mettre une adresse mail de test
            method='post'>
            <h1 className='contact_form-title'>Contact</h1>
            <h2 className='contact_form-subtitle'>Oups! I beer it again ?</h2>
            <p className='contact_form-p'>
                Merci beaucoup de nous signaler les problèmes techniques
                constater sur Bibino.fr
            </p>
            <p className='contact_form-p'>
                N'hésitez pas non plus à nous suggérer des bières, des histoires ou des fonctionnalités.
            </p>
            {/* <div>
                <label className='label_input' htmlFor='name'>
                    Nom:
                </label>
                <input type='text' id='name' placeholder='Nom' required />
            </div>
            <div>
                <label className='label_input' htmlFor='email'>
                    Email:
                </label>
                <input type='email' id='email' placeholder='Email' required />
            </div>
            <div>
                <label className='label_input' htmlFor='message'>
                    Message:
                </label>
                <textarea
                    className='input_textarea'
                    id='message'
                    maxLength='500'
                    placeholder='Veuillez saisir votre commentaire'
                    rows='10'
                    cols='70'
                    required
                />
            </div> */}
            <button type='submit' className='contact_form-btn'> Contactez nous </button>
            {/* {status} */}
        </form>
    );
};

export default ContactForm;
