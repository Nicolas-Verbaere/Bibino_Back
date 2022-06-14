// import composant
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// import axios from 'axios';

// import style
import './App.scss';

// async function requestsProfile() {
//     try {
//       const response = await axios.get('https://bibinov1.herokuapp.com/user/1');
//       console.log(response.data);
//       return response.data;
//     }
//     catch (err) {
//       console.error(err);
//       throw err;
//     }
//   }

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
