import './Profil.scss';

import Review from './Review/Review';

function Profil() {
    return (
        <>
            <section className="profil">
                <p className="profil-welcome">Bonjour,</p>
                <h1 className="profil-pseudo">PSEUDO</h1>
            </section>

            <section className="profil_reviews">
                <h1 className="profil_reviews-title">
                    Ici, vous pouvez gérer vos reviews.
                </h1>
                <section className="profil_reviews_list">
                    <Review />
                </section>
            </section>
        </>
    );
}

export default Profil;
