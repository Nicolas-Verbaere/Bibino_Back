import React from 'react';
import imgApropos from '../../../assets/img/articleapropos.jpg';
import '../Main.scss';

function ArticleAPropos() {
    return (
        <article className='main_article'>
            <img className='main_article-img' src={imgApropos} alt='' />
            <div className='main_article_rightside'>
                <h2 className='main_article_rightside-title'>
                    Venez en découvrir plus sur nous!
                </h2>
                <p className='main_article_rightside-content'>
                    Bibino est un projet de fin d'études de la formation
                    O'Clock, école de développement web.
                </p>
                <p className='main_article_rightside-content'>
                    Le cadre de ce projet était de réaliser un site, en
                    condition professionnelle en partant de zéro.
                </p>
                <p className='main_article_rightside-content'>
                    Pourquoi Bibino?
                </p>
                <p className='main_article_rightside-content'>
                    Bibino part d'un constat simple, il existe des sites en
                    ligne pour l'achat divers et variés de bières, mais très
                    peut qui donnent la possibilité à une communauté de partager
                    leurs avis et leurs expériences autour de leur boisson
                    favorite.
                </p>
            </div>
        </article>
    );
}
export default React.memo(ArticleAPropos);
