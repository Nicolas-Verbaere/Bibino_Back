import React from 'react';

import { useState } from 'react';
import '../Form.scss';
import FormInput from '../FormInput';

import axios from 'axios';

const Connexion = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    async function requestsConnexion() {
        try {
            const response = await axios.get(
                'https://bibinov1.herokuapp.com/user'
            );
            console.log(
                'methode find',
                response.data.find((user) => user.email === values.email)
            );
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    const inputsConnection = [
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'Adresse mail invalide',
            label: 'Email',
            required: true
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Mot de Passe',
            errorMessage:
                'Le mot de passe doit contenir au minimum 8 caractères, un caractère spécial, une lettre majuscule, une lettre minuscule et un nombre.',
            label: 'Mot de Passe',
            pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`,
            required: true
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        requestsConnexion();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(e.target.value);
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

                <button type="submit">Identifiez-vous</button>
                <button>Mot de passe oublié?</button>
            </form>
        </section>
    );
};

export default React.memo(Connexion);
