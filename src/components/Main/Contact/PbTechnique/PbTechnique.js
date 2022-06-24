import React, { useState } from 'react';
// import axios from 'axios';

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
            action='mailto:******@gmail.com' // TODO Mettre une adresse mail de test
            method='post'>
            <h1>Contact</h1>
            <h2>Oups! I beer it again ?</h2>
            <p>
                Merci beaucoup de nous signaler les problémes techniques
                constater sur Bibino.fr
            </p>
            <div>
                <label htmlFor='name'>Nom:</label>
                <input type='text' id='name' placeholder='Nom' required />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' placeholder='Email' required />
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea
                    id='message'
                    maxLength='500'
                    placeholder='Veuillez saisir votre commentaire'
                    rows='10'
                    cols='70'
                    required
                />
            </div>
            <button type='submit'>{status}</button>
        </form>
    );
};

export default ContactForm;
