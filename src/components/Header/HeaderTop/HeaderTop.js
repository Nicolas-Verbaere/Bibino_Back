import { Link, useNavigate } from 'react-router-dom';

import logo from '../../../assets/img/logo_bibino.png';
import iconProfil from '../../../assets/img/icon_profil.png';
import iconLogout from '../../../assets/img/icon_logout.png';
import './HeaderTop.scss';

function HeaderTop({isLogged, setIsLogged}) {
    const navigate = useNavigate()
    function handleclick() {
       setIsLogged(false);
       localStorage.clear();
       navigate('/');
    }
    return (
        <section className="top_header">
                <Link to="/">
                    <img className="top_header-logo" src={logo} alt="" />
                </Link>
                <Link to="/">
                    <h1 className="top_header-title">Bibino</h1>
                </Link>

            <section className="top_header_auth">

                { isLogged ?
                (<Link to='/profil'>
                    <img
                        className="top_header_auth-profil"
                        src={iconProfil}
                        alt="profil"
                    ></img>
                <img 
                src={iconLogout} 
                alt="logout" 
                className="top_header_auth-logout" 
                onClick={handleclick}>
                   
                </img>
                </Link>)
                :
                (<Link to='/formulaire'>
                    <img
                        className="top_header_auth-profil"
                        src={iconProfil}
                        alt="profil"
                    ></img>
                </Link>)}
                 
            </section>
        </section>
    );
}

export default HeaderTop;
