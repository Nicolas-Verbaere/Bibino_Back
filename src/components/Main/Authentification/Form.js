import React from 'react';
import './Form.scss';

import Connection from './Connection/Connection';
import Register from './Register/Register';

const Form = ( setIsLogged, isLogged ) => {
    return (
        <div className="container">
            <Connection setIsLogged={setIsLogged} isLogged={isLogged} />
            <Register />
        </div>
    );
};

export default React.memo(Form);
