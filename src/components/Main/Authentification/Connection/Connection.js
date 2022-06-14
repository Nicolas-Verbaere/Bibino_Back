import React from 'react';

import { useState } from 'react';
import '../Form.scss';
import FormInput from '../FormInput';

// import PropTypes from 'prop-types';

const Connexion = () =>
    // {email, password}
    {
        const [values, setValues] = useState({
            email: '',
            password: ''
        });

        const inputsConnection = [
            {
                id: 2,
                name: 'email', //{email}
                type: 'email',
                placeholder: 'Email',
                errorMessage: 'It should be a valid email address!',
                label: 'Email',
                required: true
            },
            {
                id: 4,
                name: 'password', //{password}
                type: 'password',
                placeholder: 'Mot de Passe',
                errorMessage:
                    'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
                label: 'Mot de Passe',
                pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
                    <button type="submit">Identifiez-vous</button>
                    <button>Mot de passe oublié?</button>
                </form>
            </section>
        );
    };

// Connexion.propTypes = {
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,

//   };
export default React.memo(Connexion);
