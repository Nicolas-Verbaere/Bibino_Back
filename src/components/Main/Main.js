import React from 'react';

import ArticleAPropos from "./ArticleAPropos/ArticleAPropos"
import ArticleTopBeers from "./ArticleTopBeers/ArticleTopBeers"
import './Main.scss'

function Main (){

return (

    <main className="main">
        <ArticleAPropos/>
        <ArticleTopBeers/>
      </main>
    )   
}
export default React.memo(Main);