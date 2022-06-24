import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FormInput from '../FormInput';

// TODO A poster sur /article
// Manque isContentEditable( contene de l'article)
// BiereID, date de publication (insert auto Now)

import '../Contact.scss';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const SuggestionBHistoire = () => {
    const [values, setValues] = useState({ name: '' });
    const [history, setHistory] = useState('');

    function postHistory() {
        axios
            .post(`https://bibinov1.herokuapp.com/history`, {})
            .then(function (response) {
                // console.log('consolelog getStyleBeer', response.data);
                setHistory(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }

    const handleSubmit = (e) => {
        setValues({ ...values, [e.target.name]: e.targer.value });
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        postHistory();
    }, []);

    return (
        <section className='section_right'>
            <form onSubmit={handleSubmit} onChange={onChange}>
                <h1>Contact</h1>
                <h2>Raconte-moi une histoire ?</h2>
                <p>
                    Vous avez une histoire sur une bière a nous raconter? Merci
                    de nous la suggerer en replissant le formulaire ci-dessous
                </p>
                <label for='name'>Vote histoire:</label>
                <div>
                    <label for='name'> </label>
                    <input
                        type='text'
                        name='name'
                        id='1'
                        placeholder='Titre de votre article:'
                        option=''
                    />
                </div>
                <textarea
                    type='text'
                    name='notice'
                    id='8'
                    placeholder='Veuillez saisir votre commentaire'
                    option=''
                    required
                    maxLength='500'
                    rows='10'
                    cols='70'
                />
                <button>Envoyer</button>
            </form>
        </section>
    );
};

export default React.memo(SuggestionBHistoire);
