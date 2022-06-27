import React from 'react';
import imgApropos from "../../../assets/img/articleapropos.jpg";

function ArticleAPropos () {

    return (
        <article className="main_article">
        <img className="main_article-img" src={imgApropos} alt="" />
        <div className="main_article_rightside">
            <h2 className="main_article_rightside-title">Venez en découvrir plus sur nous!</h2>
            <p className="main_article_rightside-content">Bibino est un projet de fin de formation O'clock.</p>
            <p className="main_article_rightside-content">Nous avions une deadline de 1 mois à respecter.</p>
            <p className="main_article_rightside-content">L'idée à été proposé par Nicolas Verbaere et le projet à vu le jour grâce au travail de l'équipe.</p>
            <p className="main_article_rightside-content">L'objectif de base est de proposer à nos utilisateurs une plateforme ou ils pourront voir, noter et donner leur avis sur différentes bières.</p>
        </div>
    </article>
    )
}
export default React.memo(ArticleAPropos);