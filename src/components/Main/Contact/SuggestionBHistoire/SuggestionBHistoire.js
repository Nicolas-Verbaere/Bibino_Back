import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SuggestionBHistoire.scss';
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

    function clearForm() {
        document.getElementById('3').value = '';
    }

    const handleSubmit = (e) => {
        postHistory();
        e.preventDefault();
        setValues({ ...values, title: '', content: '' });
        clearForm();
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getBeerId();
    }, []);

    return (
            <form
                className='suggestionBHistoire_form'
                onSubmit={handleSubmit}
                onChange={onChange}>
                <h1 className='suggestionBHistoire_form-title'>Ajouter l'histoire d'une bière</h1>
                <h2 className='suggestionBHistoire_form-subtitle'>Raconte-moi une histoire ?</h2>
                <p className='suggestionBHistoire_form-p'>
                    Vous avez une histoire sur une bière a nous raconter? Merci
                    de nous la suggerer en replissant le formulaire ci-dessous
                </p>
                <h3 className='suggestionBHistoire_form-subtitle'>Vote histoire:</h3>
                <label className='suggestionBHistoire_form-label' for='title'>
                    Titre de votre histoire:
                </label>
                <input
                    className='suggestionBHistoire_form-input'
                    type='text'
                    name='title'
                    id='1'
                    placeholder='Titre de votre article:'
                    option=''
                    required
                    value={values.title}
                />

                <label className='suggestionBHistoire_form-label' for='name'>
                    Nom de la bière (facultatif):
                </label>
                <input className='suggestionBHistoire_form-input' list='name' id='3' name='beer_id' />
                <datalist id='name'>
                    {beer_id.map((el) => (
                        <option key={el.id} value={el.name}>
                            {el.name}
                        </option>
                    ))}
                </datalist>

                <label className='suggestionBHistoire_form-label' for='content'>
                    Contenu de votre histoire:
                </label>
                <textarea
                    className='suggestionBHistoire_form-textarea'
                    type='text'
                    name='content'
                    id='8'
                    placeholder='Veuillez saisir votre histoire'
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

                <button className='suggestionBHistoire_form-btn'>Envoyer</button>
            </form>
    );
};

export default React.memo(SuggestionBHistoire);
