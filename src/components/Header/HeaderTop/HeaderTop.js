import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo_bibino.png';
import iconProfil from '../../../assets/img/icone_profil.png';
import './HeaderTop.scss';

function HeaderTop() {
    return (
        <section className="top_header">
            <Link to="/">
                <img className="top_header-logo" src={logo} alt="" />
            </Link>
            <Link to="/">
                <h1 className="top_header-title">Bibino</h1>
            </Link>

            

            {localStorage.getItem('userLoggedToken') ? 
            <Link to="/profil">
                <img
                    className="top_header-profil"
                    src={iconProfil}
                    alt="profil"
                ></img>
            </Link>
            :
            <Link to="/formulaire">
                <img
                    className="top_header-profil"
                    src={iconProfil}
                    alt="profil"
                ></img>
            </Link>}
        </section>
    );
}

export default HeaderTop;
