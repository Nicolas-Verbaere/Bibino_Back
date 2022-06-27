import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Contact.scss';

import Navbar from './Navbar';
import PbTechnique from './PbTechnique/PbTechnique';
import SuggestionBiere from './SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './SuggestionBHistoire/SuggestionBHistoire';

const Contact = ({ user }) => {
    return (
        <div className='container'>
            <Navbar />

            <Routes className='nav'>
                <Route
                    className='nav-link'
                    path='/contact/PbTechnique'
                    element={<PbTechnique user={user} />}
                />
                <Route
                    className='nav-link'
                    path='/contact/SuggestionBiere'
                    element={<SuggestionBiere user={user} />}
                />
                <Route
                    className='nav-link'
                    path='/contact/SuggestionBHistoire'
                    element={<SuggestionBHistoire user={user} />}
                />
            </Routes>
        </div>
    );
};

export default React.memo(Contact);
