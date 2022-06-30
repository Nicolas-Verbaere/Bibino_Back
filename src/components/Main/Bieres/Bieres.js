import './Bieres.scss';
import SearchBar from './SearchBar/SearchBar';
import BieresContainer from './BieresContainer/BieresContainer';

function Bieres({bieres, biereId, setBiereId})  {
    return (
        <section className="bieres">
            <SearchBar />
            <BieresContainer bieres={bieres} biereId={biereId} setBiereId={setBiereId} />
        </section>


    )
}

export default Bieres;