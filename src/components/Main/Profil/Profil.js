import PropTypes from 'prop-types';
import './Profil.scss';

import Review from './Review/Review';


function Profil({ user, userReviews }) {
    return (
        <>
            <section className="profil">
                <p className="profil-welcome">Bonjour,</p>
                <h1 className="profil-pseudo">{user.alias}</h1>
            </section>

            <section className="profil_reviews">
                <h1 className="profil_reviews-title">Ici, vous pouvez gérer vos reviews.</h1>
                <section className="profil_reviews_list">

                  {userReviews.map((userReview) => (
                  <Review key={userReview.reviewid} userReview={userReview}  />
                  ))}

                  {/* <Review /> */}

                </section>
            </section>
        </>
    );
}

Profil.propTypes = { 
    user: PropTypes.arrayOf(
        PropTypes.shape({
            alias: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    userReviews: PropTypes.arrayOf(
        PropTypes.shape({ 
            reviewid: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            alcohol_level: PropTypes.number.isRequired,
            brewery: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    
};

export default Profil;