import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import Apropos from './Apropos/Apropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from './Profil/Profil';

import './Main.scss';


import './Main.scss';

function Main({ user, userReviews }) {

    return (
        <main className="main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Link to="/a-propos"><ArticleAPropos /></Link>
                            
                            <ArticleTopBeers />
                        </>
                    }
                />
                <Route path="/a-propos" element={<Apropos />} />

                <Route path="/formulaire" element={<Form />} />

                <Route path="/profil" element={<Profil user={user} userReviews={userReviews} />} />

            </Routes>
        </main>
    );
}

export default React.memo(Main);
