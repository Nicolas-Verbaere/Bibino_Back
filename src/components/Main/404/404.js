import React from 'react';
import teutonne from '../../../assets/img/teutonne.png';
// import moine from '../../../assets/img/moine.png';
// import choppe from '../../../assets/img/choppe.png';
// import good from '../../../assets/img/good.jpg';

import '../Main.scss';

function Page404() {
    return (
        <article className='main_article'>
            <div className='main_article_rightside'>
                <h1 className='main_article_title404'>404</h1>
                <h2 className='main_article_rightside-title'>
                    Hop Hop Hop !!!
                </h2>
                <p className='main_article_rightside-content'>
                    Il semblerait qu'on ait rencontré un problème,
                </p>
                <p className='main_article_rightside-content'>
                    c'est le moment idéal pour savourer une bonne mousse
                </p>
            </div>
            <img className='main_article-img' src={teutonne} alt='' />
        </article>
    );
}

export default React.memo(Page404);
