import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BiereHistoire.scss';

const BiereHsitoire = ({ article, biere }) => {
    return (
        <>
            <article className='biereHistoire'>
                <img
                    className='biere-img'
                    // src={process.env.PUBLIC_URL + `/img/${biere.name}.jpg`}
                    alt=''
                />
                <div className='biereHstoire_contain'>
                    <h1 className='biereHstoire_contain-title'>
                        {/* {article.tite} */}
                        Stout Park
                    </h1>
                    <p className='biereHstoire_contain-content'>
                        Matt Stone, co-créateur de South Park et accro à la
                        bière irlandaise Kilkenny a parié caser dans chaque
                        épisode le mot "Kilkenny". D'ou le running gag des
                        différentes morts de Kenny et de la célèbre phrase: "Oh
                        my God, they killed Kenny"
                        {/* {article.content} */}
                    </p>
                </div>
            </article>
        </>
    );
};

export default React.memo(BiereHsitoire);
