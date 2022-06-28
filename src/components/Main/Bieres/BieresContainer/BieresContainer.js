import './BieresContainer.scss';
import Biere from './Biere/Biere';
import { Routes, Route, Link } from 'react-router-dom';

function BieresContainer({bieres, biereId, setBiereId})  {
    // console.log(bieres);
    return (
        <section className="bieres_container">
            {bieres.map((biere) =>(
            
            <Biere key={biere.id} biere={biere} biereId={biereId} setBiereId={setBiereId} />                
            ))}
            
        </section>


    )
}

export default BieresContainer;