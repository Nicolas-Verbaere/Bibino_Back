import { useState } from 'react';
import axios from 'axios';

// import './Form.scss';

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const [style, setStyle] = useState('');
    const [brewery, setBrewery] = useState('');
    const [country, setContry] = useState('');
    const [color, setColor] = useState('');

    // const getStyleBeer = () => {
    //     axios
    //         .get(`https://bibinov1.herokuapp.com/style`)
    //         .then(function (response) {
    //             // ('consolelog then userReviews', response.data);
    //             setStyle.style(response.data);
    //             console.log(
    //                 ' setStyle.style(response.data)',
    //                 setStyle.style(response.data)
    //             );
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //         .then(function () {});
    // };

    // const getBrewery = () => {
    //     axios
    //         .get(`https://bibinov1.herokuapp.com/brewery`)
    //         .then(function (response) {
    //             // console.log('consolelog then userReviews', response.data);
    //             setBrewery.brewery(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //         .then(function () {});
    // };
    // const getCountry = () => {
    //     axios
    //         .get(`https://bibinov1.herokuapp.com/country`)
    //         .then(function (response) {
    //             // en cas de réussite de la requête
    //             // console.log('consolelog then userReviews', response.data);
    //             setContry.contry(response.data);
    //         })
    //         .catch(function (error) {
    //             // en cas d’échec de la requête
    //             console.log(error);
    //         })
    //         .then(
    //             function () {}
    //             // dans tous les cas
    //         );
    // };
    // const getColorBeer = () => {
    //     axios
    //         .get(`https://bibinov1.herokuapp.com/color`)
    //         .then(function (response) {
    //             // console.log('consolelog then userReviews', response.data);
    //             setColor.color(response.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    //         .then(function () {});
    // };
    // -------------------------
    // getStyleBeer();
    // getBrewery();
    // getCountry();
    // getColorBeer();
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    );
};

export default FormInput;
