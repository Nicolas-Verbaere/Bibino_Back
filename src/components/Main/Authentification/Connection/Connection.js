import React from 'react';

import { useState } from 'react';
import '../Form.scss';
import FormInput from '../FormInput';

const Connexion = () => {
    const [values, setValues] = useState({
        pseudo: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    });

    const inputsConnection = [
        {
            id: 1,
            name: 'pseudo',
            type: 'text',
            placeholder: 'Pseudo',
            errorMessage:
                "Pseudo should be 3-16 characters and shouldn't include any special character!",
            label: 'Pseudo',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            required: true
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <section className="connection">
            <form onSubmit={handleSubmit}>
                <h1>Connexion</h1>
                {inputsConnection.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Identifiez-vous</button>
                <button>Mot de passe oublié?</button>
            </form>
        </section>
    );
};
export default React.memo(Connexion);
