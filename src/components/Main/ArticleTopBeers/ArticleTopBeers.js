import React from 'react';

function ArticleTopBeers () {
    return(
    <article className="main_article">
    <img src="#" alt="" />
    <div className="main_article_rightside">
        <h2 className="main_article_rightside-title">Découvrez les bières les mieux notées des 7 derniers jours</h2>
        <p className="main_article_rightside-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sodales facilisis. Cras aliquam leo a lacus accumsan, vel bibendum velit feugiat. Nulla in lacinia risus. Phasellus eu nisl ante. Nulla purus erat, eleifend aliquam fringilla eu, lacinia bibendum diam. Ut pharetra eget dui at pulvinar. Phasellus eget facilisis urna.</p>
    </div>
    </article>
    )
}
export default React.memo(ArticleTopBeers);