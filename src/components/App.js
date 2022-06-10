import logo from "../assets/img/logo_bibino.png";
import iconProfil from "../assets/img/icone_profil.png";


import Main from './Main/Main'

// import composant
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// import style
import './App.scss';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Main/>

      <Footer />
    </div>
  );
}

export default App;
