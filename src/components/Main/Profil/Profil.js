import PropTypes from 'prop-types';
import './Profil.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import Review from './Review/Review';


function Profil({ user, userToken }) {
    const [userReviews, setUserReviews] = useState([]);

    function getUserReviews() {
        const userTokenDecoded = jwt_decode(userToken);
        axios
            .get(
                `https://bibinov1.herokuapp.com/user/${userTokenDecoded.user.id}/review`
            )
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

    
    useEffect(() => {
            getUserReviews();
        
        
    }, []);
    return (
        <>
        
            <section className="profil">
                <p className="profil-welcome">Bonjour,</p>
                <h1 className="profil-pseudo">{user && user.alias}</h1>
            </section>

            <section className="profil_reviews">
                <h1 className="profil_reviews-title">Ici, vous pouvez gérer vos reviews.</h1>
                <section className="profil_reviews_list">

                
                  {userReviews?.reviews?.map((item) => (
                   <Review key={item.review.id} {...item} />
                 
                  ))}


                </section>
            </section>
        </>
    
    );
}

// Profil.propTypes = { 
//     user: PropTypes.arrayOf(
//         PropTypes.shape({
//             alias: PropTypes.string.isRequired,
//         }).isRequired
//     ).isRequired,
//     userReviews: PropTypes.arrayOf(
//         PropTypes.shape({ 
//             reviewid: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             alcohol_level: PropTypes.number.isRequired,
//             brewery: PropTypes.string.isRequired,
//             content: PropTypes.string.isRequired,
//         }).isRequired
//     ).isRequired,
    
// };

export default Profil;