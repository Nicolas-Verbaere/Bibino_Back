import './Review.scss'

import Article1 from '../../../../assets/img/bulles_nav.jpg';
import IconModify from '../../../../assets/img/icon_modify.png';
import IconDelete from '../../../../assets/img/icon_trash.png';

function Review ({ userReview }){
    const { name, alcohol_level, brewery, country, content, beerid } = userReview;

return (

    <article className="profil_reviews_list_review">
        <section className="profil_reviews_list_review_beer">
            <img className="profil_reviews_list_review_beer-img" src={process.env.PUBLIC_URL + `/img/${name}.jpg`} alt="" />
            <div className="profil_reviews_list_review_beer_content">
                <h2 className="profil_reviews_list_review_beer_content-title">{name}</h2>
                <p className="profil_reviews_list_review_beer_content-alcool">Alcool: {alcohol_level}°</p>
                <p className="profil_reviews_list_review_beer_content-brasserie">Brasserie: {brewery}</p>
                <p className="profil_reviews_list_review_beer_content-origin">Origine: {country}</p>
            </div>

        </section>
        <section className="profil_reviews_list_review_content">
            <div className="profil_reviews_list_review_content_icon">
                <a href="#"><img className="profil_reviews_list_review_content_icon-modify" src={IconModify} alt="" /></a>
                <a href="#"><img className="profil_reviews_list_review_content_icon-delete" src={IconDelete} alt="" /></a>
            </div>
            <p className="profil_reviews_list_review_content-p">{content}</p>
        </section>
    </article>
    
    )   
}
export default Review;