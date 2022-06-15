import React from 'react';

import { useState } from 'react';
import '../Form.scss';
import FormInput from '../FormInput';

import axios from 'axios';

const Register = () => {
    const [values, setValues] = useState({
        alias: '',
        email: '',
        date_of_birth: '',
        password: '',
        confirmPassword: ''
    });

    const inputsRegister = [
        {
            id: 1,
            name: 'alias',
            type: 'text',
            placeholder: 'Pseudo',
            errorMessage:
                'Votre pseudo doit contenir au minimum 3 caractères et au maximum 20',
            label: 'Pseudo',
            pattern: `^.{3,20}[^"]$`,
            required: true
        },
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
            id: 3,
            name: 'date_of_birth',
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
                'Le mot de passe doit contenir au minimum 8 caractères, un caractère spécial, une lettre majuscule, une lettre minuscule et un nombre.',
            label: 'Mot de Passe',
            pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`,
            required: true
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirmation',
            errorMessage: 'Mot de passe ne correspond pas',
            label: 'Confirmation',
            pattern: values.password,
            required: true
        }
    ];

    function addUser() {
        axios
            .post('https://bibinov1.herokuapp.com/user', {
                alias: values.alias,
                email: values.email,
                date_of_birth: values.date_of_birth,
                password: values.password,
                confirmPassword: values.confirmPassword
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(values.date_of_birth);

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser();
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
