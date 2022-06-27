import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Contact.scss';

const SuggestionBHistoire = ({ user, bieres }) => {
    const [beer_id, setBeerId] = useState([]);
    const [values, setValues] = useState({
        title: '', // Titre de l'article
        content: '', // contenue
        beer_id: bieres.id,
        user_account_id: user.id // id utilisateur (cf token)
    });

    const userToken = localStorage.getItem('userLoggedToken');
    // console.log('bieres.id', bieres.id);
    function getBeerId() {
        axios
            .get(`https://bibinov1.herokuapp.com/beer`, {})
            .then(function (response) {
                setBeerId(response.data);
                // console.log('response.data', response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }
    function postHistory() {
        axios({
            method: 'POST',
            url: 'https://bibinov1.herokuapp.com/article',
            data: {
                title: values.title,
                content: values.content,
                beer_id: values.beer_id,
                user_account_id: values.user_account_id
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${userToken}`
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //  function clearForm() {
    //     document.getElementById('color_id').value = '';
    //     document.getElementById('style_id').value = '';
    //     document.getElementById('country_id').value = '';
    //     document.getElementById('brewery_id').value = '';
    //     document.getElementById('content').value = '';
    // }

    const handleSubmit = (e) => {
        postHistory();
        e.preventDefault();
        setValues({ ...values, title: '', content: '' });
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getBeerId();
    }, []);

    return (
        <section className='section_right'>
            <form onSubmit={handleSubmit} onChange={onChange}>
                <h1>Contact</h1>
                <h2>Raconte-moi une histoire ?</h2>
                <p className='p-SBHistoire'>
                    Vous avez une histoire sur une bière a nous raconter? Merci
                    de nous la suggerer en replissant le formulaire ci-dessous
                </p>
                <label for='name'>Vote histoire:</label>
                <div>
                    <label for='title'> </label>
                    <input
                        type='text'
                        name='title'
                        id='1'
                        placeholder='Titre de votre article:'
                        option=''
                        required
                        value={values.title}
                    />
                </div>
                <div>
                    <label className='name' for='Nom'>
                        Nom de la bière (facultatif):
                    </label>
                    <input list='name' id='3' name='beer_id' />
                    <datalist id='name'>
                        {beer_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                </div>
                <textarea
                    type='text'
                    name='content'
                    id='8'
                    placeholder='Veuillez saisir votre commentaire'
                    option=''
                    required
                    maxLength='500'
                    rows='10'
                    cols='70'
                    value={values.content}
                />

                <div className='form_user_id'>
                    <label className='label_input' for='name'>
                        Nom utilisateur:
                    </label>
                    <input
                        type='number'
                        name=' user_account_id'
                        id='9'
                        placeholder='Nom'
                        required
                        value={user.id}
                    />
                </div>

                <button>Envoyer</button>
            </form>
        </section>
    );
};

export default React.memo(SuggestionBHistoire);
