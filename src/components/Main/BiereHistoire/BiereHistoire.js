import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BiereHistoire.scss';

const BiereHsitoire = ({ article, biere }) => {
    const [beer_article, setBeerArticle] = useState([]);
    const [values, setValues] = useState({
        title: '', // Titre de l'article
        content: '' // contenue
        // beer_id: bieres.id,
        // user_account_id: user.id // id utilisateur (cf token)
    });

    function getArticle() {
        axios
            .get('https://bibinov1.herokuapp.com/article', {})
            .then(function (response) {
                setBeerArticle(response.data);
                // console.log('response.data', response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <>
            <article className='biereHistoire'>
                <img
                    className='biere-img'
                    // src={process.env.PUBLIC_URL + `/img/${biere.name}.jpg`}
                    alt=''
                />
                <div className='biereHstoire_contain'>
                    {beer_article.map((el) => (
                        <>
                            <h1 className='biereHstoire_contain-title'>
                                {el.title}
                            </h1>
                            <p className='biereHstoire_contain-content'>
                                {el.content}
                            </p>
                        </>
                    ))}
                </div>
            </article>
        </>
    );
};

export default React.memo(BiereHsitoire);
