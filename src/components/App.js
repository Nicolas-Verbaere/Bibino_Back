import logo from "../assets/img/logo_bibino.png";
import iconProfil from "../assets/img/icone_profil.png";


import Main from './Main/Main'

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <section className="top_header">
          <img className="top_header-logo" src={logo} alt="" />
          <h1 className="top_header-title">Bibino</h1>         
          <img className="top_header-profil" src={iconProfil} alt="profil"></img>
        </section>
        <nav className="nav_header">
          <a className="nav_header-link" href="#">Bières</a>
          <a className="nav_header-link" href="#">Bières du moment</a>
        </nav>
      </header>

      <Main/>

      <footer className="footer">
        <p className="footer-copyright">Copyright © 2022 Bibino - Tous droits réservés</p>
        <div className="footer_container">
          <a className="footer_container-link" href="#">Contact</a>
          <a className="footer_container-link" href="#">A propos</a>
        </div>

      </footer>
    </div>
  );
}

export default App;
