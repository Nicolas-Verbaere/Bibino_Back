import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from './Profil/Profil';

import './Main.scss';

function Main() {
    //   {forms}
    return (
        <main className="main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <ArticleAPropos />
                            <ArticleTopBeers />
                        </>
                    }
                />

                <Route path="/formulaire" element={<Form />} />

                <Route path="/profil" element={<Profil />} />
            </Routes>
        </main>
    );
}

export default React.memo(Main);
