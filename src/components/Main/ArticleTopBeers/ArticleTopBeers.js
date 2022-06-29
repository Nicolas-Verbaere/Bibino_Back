import React from 'react';
import imgTop10 from '../../../assets/img/top-10.png';
import './ArticleTopBeers.scss';

function ArticleTopBeers() {
    return (
        <>
            <article className='main_article'>
                <div className='main_article_rightside'>
                    <h2 className='main_article_rightside-title'>
                        Découvrez les bières les mieux notées du moment
                    </h2>
                    <p className='main_article_rightside-content_top10'>
                        Venez découvrir les 10 bières les mieux notées cette
                        semaine
                    </p>
                </div>

                <img className='main_article-imgTop10' src={imgTop10} alt='' />
            </article>
        </>
    );
}
export default React.memo(ArticleTopBeers);
