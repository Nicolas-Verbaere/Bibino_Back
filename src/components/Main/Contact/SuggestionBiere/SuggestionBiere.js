import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

//import './Form.scss';

const SuggestionBiere = ({ focusOnMount }) => {
    const form_SuggestionBiere = useRef(null);
    const [messageValue, setMessageValue] = useState('');

    function handleSubmit(event) {
        event.prenventDefault();
        setMessageValue('');
    }
    useEffect(() => {
        if (focusOnMount) {
            form_SuggestionBiere.current.focus();
        }
    }, []);

    return (
        <div className='section_right'>
            <h1>Contact</h1>
            <h2>Petite soif ?</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    Vous voulez ajouter votre bière préférée sur notre site?
                    Merci de nous la suggérer en replissant le formulaire
                    ci-dessous
                </p>
                <input
                    className='name'
                    type='text'
                    placeholder='Nom'
                    ref={form_SuggestionBiere}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}></input>
                <imput type='submit' value='Envoyer' />
                <p>Couleur</p>
                <select placeholder='Couleur'>
                    <option value='Blanche'>Blanche</option>
                    <option value='Blonde'>Blonde</option>
                    <option value='Ambrée'>Ambrée</option>
                    <option value='Brune'>Brune</option>
                    <option value='Noire'>Noire</option>
                </select>
                <p>Style</p>
                <select placeholder='Style'>
                    <option value='IPA'>IPA (Indian Pale Ale)</option>
                    <option value='Session IPA'>Session IPA</option>
                    <option value='Pale Ale'>Pale Ale</option>
                    <option value='Brown Ale'>Brown Ale</option>
                    <option value='DIPA'>Double IPA / Imperial IPA</option>
                    <option value='TIPA'>Triple IPA</option>
                    <option value='DIPA'>
                        NEIPA / NEIPA (New England IPA)
                    </option>
                    <option value='DDH IPA'>
                        DDH IPA (Double Dry Hopped IPA)
                    </option>
                    <option value='Brut IPA'>Brut IPA</option>
                    <option value='Gose'>Gose</option>
                    <option value='Sour'>Sour</option>
                    <option value='Lager'>Lager</option>
                    <option value='Indian Pale Lager'>Indian Pale Lager</option>
                    <option value='Pils'>Pils / Pilsner</option>
                    <option value='Lambic'>Lambic</option>
                    <option value='Gueuze'>Gueuze</option>
                    <option value='Stout'>Stout</option>
                    <option value='Porter'>Porter</option>
                    <option value='Barrel Aged'>Barrel Aged</option>
                    <option value='Barley Wine'>Barley Wine</option>
                    <option value='Fruit Beer'>Fruit Beer</option>
                    <option value='Saison'>Saison / Farmhouse</option>
                    <option value='Tripple Belge'>Tripple Belge</option>
                    <option value='Trappiste'>Trappiste</option>
                </select>
                <input
                    className='alcool'
                    type='text'
                    placeholder='°Alcool'
                    ref={form_SuggestionBiere}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}></input>
                <imput type='submit' value='Envoyer' />
                <p>Notation</p>
                <select placeholder='Notation'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <input
                    className='textArea'
                    type='text'
                    placeholder=''
                    ref={form_SuggestionBiere}
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}></input>
                <imput type='submit' value='Envoyer' />
                <button>Envoyer</button>
            </form>
        </div>
    );
};

SuggestionBiere.propTypes = {
    focusOnMount: PropTypes.bool
};

SuggestionBiere.defaultProps = {
    focusOnMount: true
};

export default React.memo(SuggestionBiere);
