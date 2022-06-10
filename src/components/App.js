import logo from "../assets/img/logo_bibino.png";
import iconProfil from "../assets/img/icone_profil.png";
import imgApropos from "../assets/img/articleapropos.jpg";

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <section className="top_header">
          {/* <figcaption className="top_header_logo">
            <img className="top_header_logo-png" src={logo} alt="" />
            <h1 className="top_header_logo-title">Bibino</h1>
          </figcaption> */}
          <img className="top_header-logo" src={logo} alt="" />
          <h1 className="top_header-title">Bibino</h1>         
          <img className="top_header-profil" src={iconProfil} alt="profil"></img>
        </section>
        <nav className="nav_header">
          <a className="nav_header-link" href="#">Bières</a>
          <a className="nav_header-link" href="#">Bières du moment</a>
        </nav>
      </header>

      <main className="main">
        <article className="main_article">
          <img className="main_article-img" src={imgApropos} alt="" />
          <div className="main_article_rightside">
           <h2 className="main_article_rightside-title">Venez en découvrir plus sur nous!</h2>
           <p className="main_article_rightside-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sodales facilisis. Cras aliquam leo a lacus accumsan, vel bibendum velit feugiat. Nulla in lacinia risus. Phasellus eu nisl ante. Nulla purus erat, eleifend aliquam fringilla eu, lacinia bibendum diam. Ut pharetra eget dui at pulvinar. Phasellus eget facilisis urna.</p>
          </div>

        </article>

        <article className="main_article">
          <img src="#" alt="" />
          <div className="main_article_rightside">
           <h2 className="main_article_rightside-title">Découvrez les bières les mieux notées des 7 derniers jours</h2>
           <p className="main_article_rightside-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sodales facilisis. Cras aliquam leo a lacus accumsan, vel bibendum velit feugiat. Nulla in lacinia risus. Phasellus eu nisl ante. Nulla purus erat, eleifend aliquam fringilla eu, lacinia bibendum diam. Ut pharetra eget dui at pulvinar. Phasellus eget facilisis urna.</p>
          </div>
        </article>

        <article className="main_article">
          <img src="#" alt="" />
          <div className="main_article_rightside">
           <h2 className="main_article_rightside-title">Découvrez la liste de bière et leur avis</h2>
           <p className="main_article_rightside-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sodales facilisis. Cras aliquam leo a lacus accumsan, vel bibendum velit feugiat. Nulla in lacinia risus. Phasellus eu nisl ante. Nulla purus erat, eleifend aliquam fringilla eu, lacinia bibendum diam. Ut pharetra eget dui at pulvinar. Phasellus eget facilisis urna.</p>
          </div>
        </article>
      </main>

      <footer className="footer">
        <p>Copyright</p>
        <a href="#">Contact</a>
        <a href="#">A propos</a>
      </footer>
    </div>
  );
}

export default App;
