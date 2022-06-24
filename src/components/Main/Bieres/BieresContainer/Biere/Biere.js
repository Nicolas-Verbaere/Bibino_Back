import './Biere.scss';
import { Link, useNavigate } from 'react-router-dom';

function Biere({biere, biereId, setBiereId})  {
    let navigate = useNavigate();

    console.log(biereId);
    function handleClick(e) {
        e.preventDefault();
        setBiereId(biere.id);
        navigate(`/biere/${biere.id}`);
    }
    return ( 
        <Link to={`/biere/${biere.id}`} >
            <article className="bieres_container_article" onClick={handleClick} >
                <img className="bieres_container_article-img" src={process.env.PUBLIC_URL + `/img/${biere.name}.jpg`} alt="" />
                <div className="bieres_container_article_content">
                    <h1 className="bieres_container_article_content-title">{biere.name}</h1>
                    <p className="bieres_container_article_content-alcool"><strong>Alcool:</strong> {biere.alcohol_level} °</p>
                    <p className="bieres_container_article_content-brasserie"><strong>Brasserie:</strong> {biere.brewery}</p>
                    <p className="bieres_container_article_content-origin"><strong>Origine:</strong> {biere.country} </p>
                    <p className="bieres_container_article_content-note"><strong>Note:</strong> </p>
                </div>
            </article>  
        </Link>  
    )
}

export default Biere;