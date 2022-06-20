import React, { useState } from 'react';

import FormInput from '../FormInput';

import '../Contact.scss';

const SuggestionBHistoire = () => {
    const [values, setValues] = useState({
        name: ''
    });

    const inputsNewBeer = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Text',
            label: '',
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
                <h2>Oups! I beer it again ?</h2>
                <p>
                    Merci beaucoup de nous signaler les problémes techniques
                    constater sur Bibino.fr'
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

export default React.memo(SuggestionBHistoire);
