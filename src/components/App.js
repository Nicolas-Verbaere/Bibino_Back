// import img
import imgApropos from "../assets/img/articleapropos.jpg";

// import composant
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// import style
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;
