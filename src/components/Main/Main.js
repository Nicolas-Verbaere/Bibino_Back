import React from 'react';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
// import Authentification from './Authentification/Authentification';
// import AuthentificationSemanticUi from './Authentification/AuthentificationSemanticUi';
import Form from './Authentification/Form';

import './Main.scss';

function Main() {
    return (
        <main className="main">
            {/* <ArticleAPropos /> */}
            {/* <ArticleTopBeers /> */}
            {/* <Authentification /> */}
            {/* <AuthentificationSemanticUi /> */}
            <Form />
        </main>
    );
}
export default React.memo(Main);
