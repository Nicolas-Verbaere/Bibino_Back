import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo_bibino.png';
import iconProfil from '../../../assets/img/icon_profil.png';
import iconLogout from '../../../assets/img/icon_logout.png';
// import iconLogout1 from '../../../assets/img/icon_logout(1).png';
import './HeaderTop.scss';

function HeaderTop() {
    function onClick(event) {

        event.preventDefault();
        localStorage.removeItem('userLoggedToken')
    };
    return (
        
            
        <section className="top_header">
            <Link to="/">
                <img className="top_header-logo" src={logo} alt="" />
            </Link>
            <Link to="/">
                <h1 className="top_header-title">Bibino</h1>
            </Link>

            

           
            <section className="top_header_auth">
            <Link to="/profil">
            
                <img
                    className="top_header_auth-profil"
                    src={iconProfil}
                    alt="profil"
                ></img>
            </Link>
            { localStorage.getItem('userLoggedToken') && (
                <button
                    className="top_header_auth-logout"
                    src={iconLogout} 
                    onclick={onClick()}
                ></button>   
            )}
            </section>
            

        </section>
    
    )
}

export default HeaderTop;
