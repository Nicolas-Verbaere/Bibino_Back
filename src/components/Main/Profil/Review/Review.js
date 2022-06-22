import './Review.scss'

import Article1 from '../../../../assets/img/bulles_nav.jpg';
import IconModify from '../../../../assets/img/icon_modify.png';
import IconDelete from '../../../../assets/img/icon_trash.png';

function Review (){

return (

    <article className="profil_reviews_list_review">
        <section className="profil_reviews_list_review_beer">
            <img className="profil_reviews_list_review_beer-img" src={Article1} alt="" />
            <div className="profil_reviews_list_review_beer_content">
                <h2 className="profil_reviews_list_review_beer_content-title">Nom de la bière</h2>
                <p className="profil_reviews_list_review_beer_content-alcool">Alcool: 4.7°</p>
                <p className="profil_reviews_list_review_beer_content-brasserie">Brasserie: Ichnusa</p>
                <p className="profil_reviews_list_review_beer_content-origin">Origine: Sardaigne</p>
            </div>

        </section>
        <section className="profil_reviews_list_review_content">
            <div className="profil_reviews_list_review_content_icon">
                <a href="#"><img className="profil_reviews_list_review_content_icon-modify" src={IconModify} alt="" /></a>
                <a href="#"><img className="profil_reviews_list_review_content_icon-delete" src={IconDelete} alt="" /></a>
            </div>
            <p className="profil_reviews_list_review_content-p">Waouh, c'est vraiment une super bonne bière, bien mon avis détaillé ?</p>
        </section>
    </article>
    
    )   
}
export default Review;