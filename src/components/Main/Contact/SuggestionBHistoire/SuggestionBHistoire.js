import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

//import './Form.scss';

const SuggestionBHistoire = ({ focusOnMount }) => {
    const form_SuggestionBHistoire = useRef(null);
    const [messageValue, setMessageValue] = useState('');

    function handleSubmit(event) {
        event.prenventDefault();
        setMessageValue('');
    }
    useEffect(() => {
        if (focusOnMount) {
            form_SuggestionBHistoire.current.focus();
        }
    }, []);

    return (
        <div className='section_right'>
            <h1>Contact</h1>
            <h2>Raconte-moi une histoire ?</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    Vous avez une histoire sur une bière a nous raconter? Merci
                    de nous la suggerer en replissant le formulaire ci-dessous
                </p>
                <input
                    type='text'
                    placeholder=''
                    ref={form_SuggestionBHistoire}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}></input>
                <imput type='submit' value='Envoyer' />
                <button>Envoyer</button>
            </form>
        </div>
    );
};

SuggestionBHistoire.propTypes = {
    focusOnMount: PropTypes.bool
};

SuggestionBHistoire.defaultProps = {
    focusOnMount: true
};

export default React.memo(SuggestionBHistoire);
