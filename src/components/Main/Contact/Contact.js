import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Contact.scss';

import Navbar from './Navbar';
import PbTechnique from './PbTechnique/PbTechnique';
import SuggestionBiere from './SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './SuggestionBHistoire/SuggestionBHistoire';

const Contact = () => {
    return (
        <div className='container'>
            <Navbar />

            <Routes className='nav'>
                <Route
                    className='nav-link'
                    path='/contact/PbTechnique'
                    element={<PbTechnique />}
                />
                <Route
                    className='nav-link'
                    path='/contact/SuggestionBiere'
                    element={<SuggestionBiere />}
                />
                <Route
                    className='nav-link'
                    path='/contact/SuggestionBHistoire'
                    element={<SuggestionBHistoire />}
                />
            </Routes>
        </div>
    );
};

export default React.memo(Contact);
