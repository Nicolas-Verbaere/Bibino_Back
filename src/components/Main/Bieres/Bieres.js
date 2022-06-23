import './Bieres.scss';
import SearchBar from './SearchBar/SearchBar';
import BieresContainer from './BieresContainer/BieresContainer';

function Bieres({bieres})  {
    return (
        <section className="bieres">
            <SearchBar />
            <BieresContainer bieres={bieres} />
        </section>


    )
}

export default Bieres;