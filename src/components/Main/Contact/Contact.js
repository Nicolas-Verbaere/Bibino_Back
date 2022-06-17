import React from 'react';
import Navbar from './Navbar';

import { Route, Routes } from 'react-router-dom';
//import './Form.scss';

import PbTechnique from './PbTechnique/PbTechnique';
import SuggestionBiere from './SuggestionBHistoire/SuggestionBHistoire';
import SuggestionBHistoire from './SuggestionBiere/SuggestionBiere';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route
                        path='/contact/PbTechnique'
                        element={<PbTechnique />}
                    />
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
        </>
    );
};

export default React.memo(Contact);
