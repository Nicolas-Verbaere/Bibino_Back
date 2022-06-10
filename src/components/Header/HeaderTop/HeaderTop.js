import logo from "../../../assets/img/logo_bibino.png";
import iconProfil from "../../../assets/img/icone_profil.png";
import './HeaderTop.scss';

function HeaderTop() {
    return (
        <section className="top_header">
          <img className="top_header-logo" src={logo} alt="" />
          <h1 className="top_header-title">Bibino</h1>         
          <img className="top_header-profil" src={iconProfil} alt="profil"></img>
        </section>       
    );
}

export default HeaderTop;