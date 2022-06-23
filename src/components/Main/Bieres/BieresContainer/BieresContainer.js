import './BieresContainer.scss';
import Biere from './Biere/Biere';

function BieresContainer({bieres})  {
    return (
        <section className="bieres_container">
            {bieres.map((biere) =>(
            <Biere key={biere.id} biere={biere} />                
            ))}
            
        </section>


    )
}

export default BieresContainer;