import React from 'react';

import { useState } from 'react';
import '../Form.scss';
import FormInput from '../FormInput';

const Register = () => {
    const [values, setValues] = useState({
        pseudo: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword: ''
    });

    const inputsRegister = [
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
        },
        {
            id: 3,
            name: 'birthday',
            type: 'date',
            placeholder: 'Date de naissance',
            label: 'Date de naissance'
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Mot de Passe',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            label: 'Mot de Passe',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirmation',
            errorMessage: "Passwords don't match!",
            label: 'Confirmation',
            pattern: values.password,
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
        <section className="register">
            <form onSubmit={handleSubmit}>
                <h1>Créer votre compte</h1>
                {inputsRegister.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Enregistrer</button>
            </form>
        </section>
    );
};

export default React.memo(Register);
