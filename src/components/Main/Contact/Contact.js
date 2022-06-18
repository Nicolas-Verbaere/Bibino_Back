import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import './Form.scss';

import Navbar from './Navbar';
import PbTechnique from './PbTechnique/PbTechnique';
import SuggestionBiere from './SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './SuggestionBHistoire/SuggestionBHistoire';

const Contact = () => {
    console.log('contact');
    return (
        <div className='container'>
            <Navbar />
            <Routes>
                <Route path='/contact/PbTechnique' element={<PbTechnique />} />
                <Route
                    path='/contact/SuggestionBiere'
                    element={<SuggestionBiere />}
                />
                <Route
                    path='/contact/SuggestionBHistoire'
                    element={<SuggestionBHistoire />}
                />
            </Routes>
        </div>
    );
};

export default React.memo(Contact);
