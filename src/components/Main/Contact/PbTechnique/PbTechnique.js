import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FormInput from '../FormInput';

import '../Contact.scss';

const PbTechnique = () => {
    const [values, setValues] = useState({ name: '' });
    const [comment, setComment] = useState('');

    function postPbTechnique() {
        axios
            .post(`https://bibinov1.herokuapp.com/comment`, {})
            .then(function (response) {
                // console.log('consolelog getStyleBeer', response.data);
                setComment(response.data);
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
        postPbTechnique();
    }, []);

    return (
        <section className='section_right'>
            <form onSubmit={handleSubmit} onChange={onChange}>
                <h1>Contact</h1>
                <h2>Oups! I beer it again ?</h2>
                <p>
                    Merci beaucoup de nous signaler les problémes techniques
                    constater sur Bibino.fr
                </p>
                <label for='name'>Vote commentaire:</label>
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

export default React.memo(PbTechnique);
