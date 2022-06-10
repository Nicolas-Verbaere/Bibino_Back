import logo from "../assets/img/logo_bibino.png";
import iconProfil from "../assets/img/icone_profil.png";


import Main from './Main/Main'

// import composant
import Header from "./Header/Header";

// import style
import './App.scss';

const App = () => {
  return (
    <div className="App">

      <Header />

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
