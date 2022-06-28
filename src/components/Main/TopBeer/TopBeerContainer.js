import { useEffect, useState } from 'react';
import React from 'react';
import BieresDuMoment from './BieresDuMoment/BieresDuMoment';
import axios from 'axios';
import './TopBeerContainer.scss';

function TopBeer({ biereId, setBiereId }) {
    const [topBiere, setTopBiere] = useState([]);

    function getTopBieres() {
        axios
            .get(
                'https://bibinov1.herokuapp.com/beer/topbeers'
                //  {
                //   headers: {
                //     'Content-Type': 'application/json',
                //     Accept: 'application/json',
                //     Authorization: `Bearer ${userToken}`
                //   },
                // }
            )
            .then(function (response) {
                // console.log(response.data)
                console.log(response.data);
                setTopBiere(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }

    useEffect(() => {
        getTopBieres();
    }, []);

    return (
        <>
            <h1 className='topbeer-title'>
                Voici les 10 bières les mieux notées du moment:
            </h1>
            <section className='bieres_container'>
                {topBiere.map((biere) => (
                    <BieresDuMoment
                        key={biere.id}
                        biere={biere}
                        biereId={biereId}
                        setBiereId={setBiereId}
                    />
                ))}
            </section>
        </>
    );
}
export default React.memo(TopBeer);
