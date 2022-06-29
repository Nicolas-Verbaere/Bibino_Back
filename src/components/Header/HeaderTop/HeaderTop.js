import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import logo from '../../../assets/img/logo_bibino.png';
import iconProfil from '../../../assets/img/icon_profil.png';
import iconLogout from '../../../assets/img/icon_logout.png';
import './HeaderTop.scss';

function HeaderTop({isLogged, setIsLogged}) {
    function handleclick() {
       setIsLogged(false);
       localStorage.clear();
    }

    // useEffect(() => {
    // }, [isLogged]);
    return (
        
            
        <section className="top_header">
                <Link to="/">
                    <img className="top_header-logo" src={logo} alt="" />
                </Link>
                <Link to="/">
                    <h1 className="top_header-title">Bibino <em>et la communautée du goulot</em></h1>
                </Link>

            <section className="top_header_auth">

                { isLogged ?
                (<>
                <Link to='/profil'>
                    <img
                        className="top_header_auth-profil"
                        src={iconProfil}
                        alt="profil"
                    ></img>
                </Link>
                <Link to='/'>
                <img 
                src={iconLogout} 
                alt="logout" 
                className="top_header_auth-logout" 
                onClick={handleclick}>
                   
                </img>
                </Link></>)
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
    
    )
}

export default HeaderTop;
