import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import Apropos from './Apropos/Apropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from './Profil/Profil';
import Contact from './Contact/Contact';
import Bieres from './Bieres/Bieres';
import Biere from './Biere/Biere';

import PbTechnique from './Contact/PbTechnique/PbTechnique';
import SuggestionBiere from './Contact/SuggestionBiere/SuggestionBiere';
import SuggestionBHistoire from './Contact/SuggestionBHistoire/SuggestionBHistoire';

import './Main.scss';


function Main({ user, userReviews, isLogged, setIsLogged, bieres, setBiereId, biereId, setBiere, biere }) {

    return (
        <main className='main'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Link to="/a-propos"><ArticleAPropos /></Link>
                            <Link to="/top-bieres"><ArticleTopBeers /></Link>                            
                        </>
                    }
                />
                <Route path="/bieres" element={<Bieres bieres={bieres} biereId={biereId} setBiereId={setBiereId}/>} />
                <Route path={`/biere/${biereId}`} element={<Biere biere={biere} setBiere={setBiere} biereId={biereId} setBiereId={setBiereId} user={user} isLogged={isLogged} />} />
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
                        element={<SuggestionBiere user={user} />}
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

export default Main;
