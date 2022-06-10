import React from 'react';

import ArticleAPropos from "./ArticleAPropos/ArticleAPropos"
import ArticleTopBeers from "./ArticleTopBeers/ArticleTopBeers"
import Authentification from "./Authentification/Authentification"
import './Main.scss'

function Main (){

return (

    <main className="main">
        {/* <ArticleAPropos/>
        <ArticleTopBeers/> */}
        <Authentification/>
      </main>
    )   
}
export default React.memo(Main);