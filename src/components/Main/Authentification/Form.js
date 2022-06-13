import React from 'react';
import './Form.scss';

import Connection from './Connection/Connection';
import Register from './Register/Register';

const Form = () => {
    return (
        <div className="container">
            <Connection />
            <Register />
        </div>
    );
};

export default React.memo(Form);
