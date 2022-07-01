import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SuggestionBiere.scss';

// import FormInput from '../FormInput';

import '../Contact.scss';

const SuggestionBiere = ({ user }) => {
    const [style_id, setStyleId] = useState([]);
    const [country_id, setContryId] = useState([]);
    const [color_id, setColorId] = useState([]);
    const [brewery_id, setBreweryId] = useState([]);
    const [values, setValues] = useState({
        name: '', //string nom de la biere
        description: '', //avis
        alcohol_level: '',
        country_id: '', //string pays
        style_id: '', //string style
        color_id: '', //string color
        brewery_id: '', // string
        user_account_id: user.id // id utilisateur (cf token)
    });
    // console.log('user SuggestionBiere', user.id);

    const userToken = localStorage.getItem('userLoggedToken');

    // console.log('user', user.id);

    function getStyleBeer() {
        axios
            .get(`https://bibinov1.herokuapp.com/style`, {})
            .then(function (response) {
                // console.log('consolelog getStyleBeer', response.data);
                setStyleId(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }
    function getContry() {
        axios
            .get(`https://bibinov1.herokuapp.com/country`, {})
            .then(function (response) {
                // console.log('consolelog getContry', response.data);
                setContryId(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }
    function getColor() {
        axios
            .get(`https://bibinov1.herokuapp.com/color`, {})
            .then(function (response) {
                // console.log('consolelog getColor', response.data);
                setColorId(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }
    function getBrewery() {
        axios
            .get(`https://bibinov1.herokuapp.com/brewery`, {})
            .then(function (response) {
                // console.log('consolelog getBrewery', response.data);
                setBreweryId(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }

    function addBeer() {
        axios({
            method: 'POST',
            url: 'https://bibinov1.herokuapp.com/beer',
            data: {
                name: values.name,
                description: values.description, //avis
                alcohol_level: values.alcohol_level,
                country_id: values.country_id,
                style_id: values.style,
                color_id: values.color_id,
                brewery_id: values.brewery_id,
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
        document.getElementById('color_id').value = '';
        document.getElementById('style_id').value = '';
        document.getElementById('country_id').value = '';
        document.getElementById('brewery_id').value = '';
        // document.getElementById('content').value = '';
    }

    const handleSubmit = (e) => {
        addBeer();
        e.preventDefault();
        setValues({
            ...values,
            name: '',
            alcohol_level: '',
            content: ''
        });
        clearForm();
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getStyleBeer();
        getContry();
        getColor();
        getBrewery();
    }, []);
    return (
            <form
                className='suggestionBiere_form'
                onSubmit={handleSubmit}
                onChange={onChange}>
                <h1 className='suggestionBiere_form-title'>Ajouter une bière</h1>
                <h2 className='suggestionBiere_form-subtitle'>Petite soif ?</h2>
                <p className='suggestionBiere_form-p'>
                    Vous voulez ajouter votre bière préférée sur notre site?
                    Merci de nous la suggérer en remplissant le formulaire
                    ci-dessous
                </p>

                    <label className='suggestionBiere_form-label' for='name'>
                        Nom de la bière:
                    </label>
                    <input
                        className='suggestionBiere_form-input'
                        type='text'
                        name='name'
                        id='beer_name'
                        placeholder='Nom'
                        option=''
                        required
                        value={values.name}
                    />
                    <label className='suggestionBiere_form-label' for='color_id'>
                        Couleur de la bière:
                    </label>

                    <select
                        className='suggestionBiere_form-input'
                        name='color_id'
                        id='color_id'
                        placeholder='Couleur'
                        required>
                        <option value=''>-- Sélectionnez une couleur</option>
                        {color_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                    <label className='suggestionBiere_form-label' for='name'>
                        Style de la bière:
                    </label>
                    <select className='suggestionBiere_form-input' name='style' id='style_id' placeholder='Style' required>
                        <option value=''>-- Sélectionnez un style</option>
                        {style_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                    <label className='suggestionBiere_form-label' for='name'>
                        Degré d'alcool:{' '}
                    </label>
                    <input
                        className='suggestionBiere_form-input'
                        type='number'
                        name='alcohol_level'
                        id='alcohol_level'
                        placeholder='°Alcool'
                        step='.1'
                        option=''
                        required
                        value={values.alcohol_level}
                    />
                    <label className='suggestionBiere_form-label' for='country_id'>
                        Pays de la brasserie:
                    </label>
                    <input className='suggestionBiere_form-input' list='pays' id='country_id' name='country_id' />
                    <datalist id='pays'>
                        {country_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                    <label className='suggestionBiere_form-label' for='brewery_id'>Brasserie de la bière:</label>
                    <input className='suggestionBiere_form-input' list='brasserie' id='brewery_id' name='brewery_id' />
                    <datalist id='brasserie'>
                        {brewery_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                    <label className='suggestionBiere_form-label' for='name'>
                        Description:
                    </label>
                    <textarea
                        className='suggestionBiere_form-input'
                        type='text'
                        name='description'
                        id='content'
                        placeholder='Veuillez saisir votre commentaire'
                        option=''
                        required
                        maxLength='300'
                        rows='5'
                        cols='50'
                        value={values.content}
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
                <button className='suggestionBiere_form-btn'>Envoyer</button>
            </form>
    );
};

export default React.memo(SuggestionBiere);
