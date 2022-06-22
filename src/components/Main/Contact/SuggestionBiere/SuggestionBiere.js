import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    console.log('user', user.id);

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
        axios
            .post('https://bibinov1.herokuapp.com/beer', {
                name: values.name,
                description: values.description, //avis
                alcohol_level: values.alcohol_level,
                country_id: values.country_id,
                style_id: values.style,
                color_id: values.color_id,
                brewery_id: values.brewery_id,
                user_account_id: values.user_account_id
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        addBeer();
        e.preventDefault();
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
        <section className='section_right'>
            <form
                className='contact_form'
                onSubmit={handleSubmit}
                onChange={onChange}>
                <h1 className='section_title'>Contact</h1>
                <h2 className='section_title_h2'>Petite soif ?</h2>
                <p className='section_p'>
                    Vous voulez ajouter votre bière préférée sur notre site?
                    Merci de nous la suggérer en replissant le formulaire
                    ci-dessous
                </p>

                <div>
                    <label className='label_input' for='name'>
                        Nom de la bière:{' '}
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='1'
                        placeholder='Nom'
                        option=''
                        required
                    />
                </div>
                <div>
                    <label className='label_input' for='name'>
                        Couleur de la bière:{' '}
                    </label>
                    <select
                        name='color_id'
                        id='2'
                        placeholder='Couleur'
                        required>
                        <option value=''>-- Sélectionnez une couleur</option>
                        {color_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label_input' for='name'>
                        Style de la bière:{' '}
                    </label>
                    <select name='style' id='3' placeholder='Style' required>
                        <option value=''>-- Sélectionnez un style</option>
                        {style_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className='label_input' for='name'>
                        Degré d'alcool:{' '}
                    </label>
                    <input
                        type='number'
                        name='alcohol_level'
                        id='4'
                        placeholder='°Alcool'
                        step='.1'
                        option=''
                        required
                    />
                </div>
                <div>
                    <label className='label_input' for='country_id'>
                        Pays de la brasserie:
                    </label>
                    <input list='pays' id='country_id' name='country_id' />
                    <datalist id='pays'>
                        {country_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                </div>
                <div>
                    <label for='brewery_id'>Brasserie de la bière:</label>
                    <input list='brasserie' id='brewery_id' name='brewery_id' />
                    <datalist id='brasserie'>
                        {brewery_id.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                </div>

                <div>
                    <label className='label_input' for='name'>
                        Description:
                    </label>
                    <textarea
                        className='input_textarea'
                        type='text'
                        name='description'
                        id='8'
                        placeholder='Veuillez saisir votre commentaire'
                        option=''
                        required
                        maxLength='300'
                        rows='5'
                        cols='50'
                    />
                </div>

                <div className='form_user_id'>
                    <label className='label_input' for='name'>
                        Nom utilisateur:{' '}
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
                <button className='contact_button'>Envoyer</button>
            </form>
        </section>
    );
};

export default React.memo(SuggestionBiere);
