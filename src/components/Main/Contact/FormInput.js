// import { useState } from 'react';
import axios from 'axios';

// import './Form.scss';

function getColorBeer() {
    axios
        .get(`https://bibinov1.herokuapp.com/color`)
        .then(function (response) {
            // en cas de réussite de la requête

            console.log('consolelog then userReviews', response.data);
        })
        .catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
        })
        .then(function () {
            // dans tous les cas
        });
}
function getStyleBeer() {
    axios
        .get(`https://bibinov1.herokuapp.com/style`)
        .then(function (response) {
            // en cas de réussite de la requête

            console.log('consolelog then userReviews', response.data);
        })
        .catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
        })
        .then(function () {
            // dans tous les cas
        });
}

function getBrewery() {
    axios
        .get(`https://bibinov1.herokuapp.com/brewery`)
        .then(function (response) {
            // en cas de réussite de la requête

            console.log('consolelog then userReviews', response.data);
        })
        .catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
        })
        .then(function () {
            // dans tous les cas
        });
}

function getCountry() {
    axios
        .get(`https://bibinov1.herokuapp.com/country`)
        .then(function (response) {
            // en cas de réussite de la requête

            console.log('consolelog then userReviews', response.data);
        })
        .catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
        })
        .then(function () {
            // dans tous les cas
        });
}

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    getStyleBeer();
    getBrewery();
    getCountry();
    getColorBeer();
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    );
};

export default FormInput;
