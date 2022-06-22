import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import Apropos from './Apropos/Apropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from './Profil/Profil';
import Contact from './Contact/Contact';

import PbTechnique from './Contact/PbTechnique/PbTechnique';
import SuggestionBiere from './Contact/SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './Contact/SuggestionBHistoire/SuggestionBHistoire';


import './Main.scss';

function Main({ user, userReviews, isLogged, setIsLogged }) {

    return (
        <main className='main'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Link to="/a-propos"><ArticleAPropos /></Link>
                            
                            <ArticleTopBeers />
                        </>
                    }
                />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="/formulaire" element={<Form isLogged={isLogged} setIsLogged={setIsLogged} />} />
                <Route path="/profil" element={<Profil user={user} userReviews={userReviews} />} />
                <Route path='/contact' element={<Contact />}>
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
                </Route>
            </Routes>
        </main>
    );
}

export default React.memo(Main);
