import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from './Profil/Profil';
import Contact from './Contact/Contact';

import PbTechnique from './Contact/PbTechnique/PbTechnique';
import SuggestionBiere from './Contact/SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './Contact/SuggestionBHistoire/SuggestionBHistoire';

import './Main.scss';

function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <ArticleAPropos />
                            <ArticleTopBeers />
                        </>
                    }
                />
                <Route path='/formulaire' element={<Form />} />
                <Route path='/profil' element={<Profil />} />
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
