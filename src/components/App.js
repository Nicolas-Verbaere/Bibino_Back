import { useEffect, useState } from 'react';
import axios from 'axios';

// import composant
import Main from './Main/Main'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

// import style
import './App.scss';

const App = () => {
  const [user, setUser] = useState([]);
  const [userReviews, setUserReviews] = useState([]);

  function getUser() {
    axios.get('https://bibinov1.herokuapp.com/user/1')
    .then(function (response) {
      // en cas de réussite de la requête
      console.log('consolelog user', response.data);
      setUser(response.data);
    })
    .catch(function (error) {
      // en cas d’échec de la requête
      console.log(error);
    })
    .then(function () {
      // dans tous les cas
    });
  }

  function getUserReviews(){
    axios.get('https://bibinov1.herokuapp.com/user/1/user-review')
    .then(function (response) {
      // en cas de réussite de la requête
      console.log('consolelog then userReviews', response.data);
      setUserReviews(response.data);
    })
    .catch(function (error) {
      // en cas d’échec de la requête
      console.log(error);
    })
    .then(function () {
      // dans tous les cas
    });
  }

  useEffect(() => {
    getUser();
    getUserReviews();
  }, []);
  return (
    <div className="App">

      <Header />

      <Main user={user} userReviews={userReviews} />

      <Footer />
    </div>
  );
}

export default App;
