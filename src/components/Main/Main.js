import React from 'react';

import ArticleAPropos from "./ArticleAPropos/ArticleAPropos"
import ArticleTopBeers from "./ArticleTopBeers/ArticleTopBeers"
import Profil from "./Profil/Profil";

import './Main.scss'

function Main (){

return (

    <main className="main">
        {/* <ArticleAPropos/>
        <ArticleTopBeers/> */}
        <Profil />
    </main>
    )   
}
export default React.memo(Main);