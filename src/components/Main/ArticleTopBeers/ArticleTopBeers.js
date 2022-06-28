import React from 'react';

function ArticleTopBeers() {
    return (
        <article className='main_article'>
            <img src='#' alt='' />
            <div className='main_article_rightside'>
                <h2 className='main_article_rightside-title'>
                    Découvrez les bières les mieux notées du moment
                </h2>
                <p className='main_article_rightside-content'>
                    Regarde comme il fait beau,
                </p>
                <p className='main_article_rightside-content'>
                    Dehors, c'est l'heure pour allez jouer,
                </p>
                <p className='main_article_rightside-content'>
                    Regarde comme il fait beau,
                </p>
                <p className='main_article_rightside-content'></p>
            </div>
        </article>
    );
}
export default React.memo(ArticleTopBeers);
