import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// import composant
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// import style
import './App.scss';

const App = () => {
    const [user, setUser] = useState([]);
    const [userReviews, setUserReviews] = useState([]);
    const [isLogged, setIsLogged] = useState(false);
    const [bieres, setBieres] = useState([]);
    const [biere, setBiere] = useState([]);
    const [biereId, setBiereId] = useState();

    // // décodage du token pour dynamiser le getUser par l'id
    // if (localStorage.getItem('userLoggedToken'))
    const userToken = localStorage.getItem('userLoggedToken');
    // console.log(userToken);
    let userTokenDecoded = null;
    // if (userToken) {

    //    userTokenDecoded = jwt_decode(userToken);
    //    console.log(userTokenDecoded.user.id);
    // }

    function getUser() {
        const userTokenDecoded = jwt_decode(userToken);
            axios({ method: 'GET',
                url: `https://bibinov1.herokuapp.com/user/${userTokenDecoded.user.id}`,
                data : {},
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${userToken}`,
                },
            })     
            .then(function (response) {
                // en cas de réussite de la requête
                // console.log('consolelog user', response.data);
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

    function getUserReviews() {
        const userTokenDecoded = jwt_decode(userToken);
        
            axios({ method: 'GET',
                url: `https://bibinov1.herokuapp.com/user/${userTokenDecoded.user.id}/review`,
                data : {},
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${userToken}`,
                },
            })     
            .then(function (response) {
                // en cas de réussite de la requête
                // console.log('consolelog then userReviews', response.data);
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

    function getBieres() {
        axios
            .get(
                'https://bibinov1.herokuapp.com/beer'
                //  {
                //   headers: {
                //     'Content-Type': 'application/json',
                //     Accept: 'application/json',
                //     Authorization: `Bearer ${userToken}`
                //   },
                // }
            )
            .then(function (response) {
                // console.log(response.data)
                // console.log(response.data)
                setBieres(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }

    useEffect(() => {
        if (localStorage.getItem('userLoggedToken')) {
            setIsLogged(true);
            getUser();
            getUserReviews();
        }
        getBieres();
    }, [isLogged]);
    return (
        <div className='App'>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />

            <Main
                user={user}
                userReviews={userReviews}
                isLogged={isLogged}
                setIsLogged={setIsLogged}
                bieres={bieres}
                setBiereId={setBiereId}
                biereId={biereId}
                setBiere={setBiere}
                biere={biere}
                userToken={userToken}
            />

            <Footer user={user} />
        </div>
    );
};

export default App;
