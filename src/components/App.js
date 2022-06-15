// import composant
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// import style
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <Header />

            <Main />

            <Footer />
        </div>
    );
};

export default App;
