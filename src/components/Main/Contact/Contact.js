import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Contact.scss';

import Navbar from './Navbar';
import ContactForm from './PbTechnique/PbTechnique';
import SuggestionBiere from './SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './SuggestionBHistoire/SuggestionBHistoire';

const Contact = ({ user }) => {
    console.log('user contact', user);
    return (
        <div className='container_navbar'>
            <Navbar user={user} />

            <Routes className='nav'>
                <Route
                    user={user}
                    className='nav-link'
                    path='/contact/PbTechnique'
                    element={<ContactForm user={user} />}
                />
                <Route
                    user={user}
                    className='nav-link'
                    path='/contact/SuggestionBiere'
                    element={<SuggestionBiere user={user} />}
                />
                <Route
                    user={user}
                    className='nav-link'
                    path='/contact/SuggestionBHistoire'
                    element={<SuggestionBHistoire user={user} />}
                />
            </Routes>
        </div>
    );
};

export default React.memo(Contact);
