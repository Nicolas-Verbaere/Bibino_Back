import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

//import './Form.scss';

const PbTechnique = ({ focusOnMount }) => {
    const form_PbTechnique = useRef(null);
    const [messageValue, setMessageValue] = useState('');

    function handleSubmit(event) {
        event.prenventDefault();
        setMessageValue('');
    }
    useEffect(() => {
        if (focusOnMount) {
            form_PbTechnique.current.focus();
        }
    }, []);

    return (
        <div className='section_right'>
            <h1>Contact</h1>
            <h2>Oups! I beer it again ?</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    Merci beaucoup de nous signaler les problémes techniques
                    constater sur Bibino.fr'
                </p>
                <input
                    type='text'
                    placeholder=''
                    ref={form_PbTechnique}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}></input>
                <imput type='submit' value='Envoyer' />
                <button>Envoyer</button>
            </form>
        </div>
    );
};

PbTechnique.propTypes = {
    focusOnMount: PropTypes.bool
};

PbTechnique.defaultProps = {
    focusOnMount: true
};

export default React.memo(PbTechnique);
