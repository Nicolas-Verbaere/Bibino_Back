import React from 'react';
import './Form.scss';

import Connection from './Connection/Connection';
import Register from './Register/Register';

const Form = ( {isLogged, setIsLogged}) => {
    return (
        <div className="container">
            <Connection isLogged={isLogged} setIsLogged={setIsLogged} />
            <Register />
        </div>
    );
};

export default React.memo(Form);
