import React, { useState } from 'react';

import FormInput from '../FormInput';

import '../Contact.scss';

const SuggestionBiere = () => {
    const [values, setValues] = useState({
        name: '',
        colour: '',
        style: '',
        percent_alcool: '',
        country: '',
        brewery: '',
        rating: '', //note
        notice: '' //avis
    });

    const inputsNewBeer = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Nom',
            label: 'Nom de la bière',
            required: true
        },
        {
            id: 2,
            name: 'colour',
            type: 'checkbox',
            placeholder: 'Couleur',
            label: 'Couleur de la bière',
            required: true
        },

        {
            id: 3,
            name: 'style',
            type: 'checkbox',
            placeholder: 'Style',
            label: 'Style de la bière',
            required: true
        },
        {
            id: 4,
            name: 'percent_alcool',
            type: 'number',
            placeholder: '°Alcool',
            label: "Degré d'alcool de la bière",
            required: true
        },
        {
            id: 5,
            name: 'contry',
            type: 'checkbox',
            placeholder: 'Pays',
            label: 'Pays de la brasserie',
            required: true
        },
        {
            id: 6,
            name: 'brewery',
            type: 'text',
            placeholder: 'Brasserie',
            label: 'Brasserie',
            required: true
        },
        {
            id: 7,
            name: 'rating',
            type: 'number',
            placeholder: 'Notation',
            label: 'Note/5',
            required: true
        },
        {
            id: 8,
            name: 'notice',
            type: 'text',
            placeholder: 'Avis',
            label: 'Avis',
            required: true
        }
    ];

    const handleSubmit = (e) => {
        setValues({ ...values, [e.target.name]: e.targer.value });
    };
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

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
                {inputsNewBeer.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Envoyer</button>
            </form>
        </section>
    );
};

export default React.memo(SuggestionBiere);
