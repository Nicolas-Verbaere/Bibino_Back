import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Histoire from './Histoire/Histoire';

import './BiereHistoire.scss';

const BiereHsitoire = () => {
    const [beer_article, setBeerArticle] = useState([]);

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
            <section className='biereHistoire'>
                {beer_article.map((el) => (
                    <Histoire key={el.id} el={el} />
                ))}
            </section>
        </>
    );
};

export default React.memo(BiereHsitoire);
