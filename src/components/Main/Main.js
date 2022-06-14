import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

import ArticleAPropos from './ArticleAPropos/ArticleAPropos';
import ArticleTopBeers from './ArticleTopBeers/ArticleTopBeers';
import Form from './Authentification/Form';
import Profil from './Profil/Profil';

import './Main.scss';

function Main() {
//   {forms}
    return (
        <main className="main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <ArticleAPropos />
                            <ArticleTopBeers />
                        </>
                    }
                />
                {/* {forms.map({id, ...rest}) => (<Route path="/formulaire" element={<Form 
                key={id}
                id={id}
                {...rest}
                
                />} />)} */}

                <Route path="/profil" element={<Profil />} />
            </Routes>
        </main>
    );
}

// Main.propTypes = {
//     forms: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired).isRequired,
//   };

export default React.memo(Main);
