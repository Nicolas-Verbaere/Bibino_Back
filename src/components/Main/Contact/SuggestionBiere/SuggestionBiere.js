import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import FormInput from '../FormInput';

import '../Contact.scss';

const SuggestionBiere = () => {
    const [style, setStyle] = useState([]);
    const [contry, setContry] = useState([]);
    const [color, setColor] = useState([]);
    const [brewery, setBrewery] = useState([]);
    const [values, setValues] = useState({
        name: '',
        color: '',
        style: '',
        percent_alcool: '',
        country: '',
        brewery: '',
        rating: '', //note
        notice: '' //avis
    });

    function getStyleBeer() {
        axios
            .get(`https://bibinov1.herokuapp.com/style`, {})
            .then(function (response) {
                console.log('consolelog getStyleBeer', response.data);
                setStyle(response.data);
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
                console.log('consolelog getContry', response.data);
                setContry(response.data);
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
                console.log('consolelog getColor', response.data);
                setColor(response.data);
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
                console.log('consolelog getBrewery', response.data);
                setBrewery(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }

    // const handleSubmit = (e) => {
    //     setValues({ ...values, [e.target.name]: e.targer.value });
    // };
    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // ;
    useEffect(() => {
        getStyleBeer();
        getContry();
        getColor();
        getBrewery();
    }, []);
    return (
        <section className='section_right'>
            <form onSubmit={handleSubmit}>
                <h1>Contact</h1>
                <h2>Petite soif ?</h2>
                <p>
                    Vous voulez ajouter votre bière préférée sur notre site?
                    Merci de nous la suggérer en replissant le formulaire
                    ci-dessous
                </p>

                <div>
                    <label for='name'>Nom de la bière: </label>
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
                    <label for='name'>Couleur de la bière: </label>
                    <select name='color' id='2' placeholder='Couleur' required>
                        <option value=''>-- Sélectionnez une couleur</option>
                        {color.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for='name'>Style de la bière: </label>
                    <select name='style' id='3' placeholder='Style' required>
                        <option value=''>-- Sélectionnez un style</option>
                        {style.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for='name'>Degré d'alcool: </label>
                    <input
                        type='number'
                        name='percent_alcool'
                        id='4'
                        placeholder='°Alcool'
                        step='.1'
                        option=''
                        required
                    />
                </div>
                <div>
                    <label for='contry'>Pays de la brasserie:</label>
                    <input list='pays' id='contry' name='contry' />
                    <datalist id='pays'>
                        {contry.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                </div>
                <div>
                    <label for='brewery'>Brasserie de la bière:</label>
                    <input list='brasserie' id='brewery' name='brewery' />
                    <datalist id='brasserie'>
                        {brewery.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </datalist>
                </div>
                <div>
                    <label for='name'>Note: Houblon/5: </label>
                    <input
                        type='number'
                        name='rating'
                        id='7'
                        placeholder='Notation'
                        option=''
                        min='0'
                        max='5'
                        required
                    />
                </div>
                <div>
                    <label for='name'>Vote avis: </label>
                    <input
                        type='text'
                        name='notice'
                        id='8'
                        placeholder='Avis'
                        option=''
                        required
                    />
                </div>
                <button>Envoyer</button>
            </form>
        </section>
    );
};

export default React.memo(SuggestionBiere);
