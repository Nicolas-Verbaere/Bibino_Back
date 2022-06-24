import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import FormInput from '../FormInput';

// TODO A poster sur /article
// Manque isContentEditable( contente de l'article)
// BiereID, date de publication (insert auto Now)

import '../Contact.scss';

const SuggestionBHistoire = ({ user }) => {
    const [values, setValues] = useState({
        title: '', // Titre de l'article
        content: '', // contenue
        // publication_date: '', // date de publication article
        beerId: '',
        user_account_id: user.id // id utilisateur (cf token)
    });
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
    // const [publication_date, setPublicationDate] = useState('');
    const [beerId, setBeerId] = useState('');
    // const [user, setUser] = useState('');

    // console.log('user.id', user.id);
    function getBeerId() {
        axios
            .get(`https://bibinov1.herokuapp.com/beer`, {})
            .then(function (response) {
                setBeerId(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }
    function postHistory() {
        axios
            .post('https://bibinov1.herokuapp.com/article', {
                title: values.title,
                content: values.content,
                // publication_date: values.publication_date,
                country_id: values.country_id,
                user_account_id: values.user
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        postHistory();
        e.preventDefault();
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
                <p>
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
                    />
                </div>
                <div>
                    <label className='label_input' for='name'>
                        Nom de la bière:
                    </label>
                    <select name='name' id='3' placeholder='Nom'>
                        <option value=''>
                            -- Sélectionnez une biere (facultatif)
                        </option>
                        {/* {beerId.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))} */}
                    </select>
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
                />
                <div className='form_user_id'>
                    <label className='label_input' for='name'>
                        Nom utilisateur:
                    </label>
                    <input
                        type='number'
                        name='user'
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
