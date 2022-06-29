import React from 'react';
import { Link } from 'react-router-dom';
import good from '../../../assets/img/good.jpg';

import '../404/404.scss';

function Page404() {
    return (
        <article className='article404'>
            <img className='article404-img' src={good} alt='' />
            <div className='article404_rightside'>
                <h1 className='article404_rightside-title'>404</h1>
                <h2 className='article404_rightside-subtitle'>
                    Hop Hop Hop !!!
                </h2>
                <p className='article404_rightside-content'>
                    Il semblerait qu'on ait rencontré un problème,
                </p>
                <p className='article404_rightside-content'>
                    c'est le moment idéal pour savourer une bonne mousse!
                </p>
                <Link to="/">
                <button className='article404_rightside-btn'>Revenir à la page d'acceuil</button>
                </Link>
            </div>
        </article>
    );
}

export default React.memo(Page404);
