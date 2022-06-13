import React from 'react';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from "./Profil/Profil";

import './Main.scss'

import './Main.scss';

function Main() {
    return (
        <main className="main">
            {/* <ArticleAPropos /> */}
            {/* <ArticleTopBeers /> */}
            <Form />
            <Profil />
        </main>
    )   
}
export default React.memo(Main);
