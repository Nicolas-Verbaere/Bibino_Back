import './Review.scss'

import IconModify from '../../../../assets/img/icon_modify.png';
import IconDelete from '../../../../assets/img/icon_trash.png';
import axios from 'axios';

function Review ( item ){   
    const { beer, review, getUserReviews } = item;

    function deleteReview() {
        const userToken = localStorage.getItem('userLoggedToken');   
        axios({ method: 'DELETE',
                url: `https://bibinov1.herokuapp.com/review/${review.id}`,
                data : {},
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${userToken}`,
                },
            })     
            
            .then(function (response) {
                console.log("delete une review")
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function handleClick() {
        deleteReview();
        console.log("boop")
    }

    // useEffect(() => {
    //    deleteReview(); 
    // }, [handleclick()]);

return (

    <article className="profil_reviews_list_review">
        <section className="profil_reviews_list_review_beer">
            <img className="profil_reviews_list_review_beer-img" src={process.env.PUBLIC_URL + `/img/${beer.name}.jpg`} alt="" />
            <div className="profil_reviews_list_review_beer_content">
                <h2 className="profil_reviews_list_review_beer_content-title">{beer.name}</h2>
                <p className="profil_reviews_list_review_beer_content-alcool"><strong>Alcool:</strong> {beer.alcohol_level}°</p>
                <p className="profil_reviews_list_review_beer_content-brasserie"><strong>Brasserie:</strong> {beer.brewery.name}</p>
                <p className="profil_reviews_list_review_beer_content-origin"><strong>Origine:</strong> {beer.country.name}</p>
                <p className="profil_reviews_list_review_beer_content-origin"><strong>Note attribuée:</strong> {review.note}/5</p>
            </div>

        </section>
        <section className="profil_reviews_list_review_content">
            <div className="profil_reviews_list_review_content_icon">
                {/* <i ><img className="profil_reviews_list_review_content_icon-modify" src={IconModify} alt="" /></i> */}
                <i onClick={handleClick}><img className="profil_reviews_list_review_content_icon-delete" src={IconDelete} alt="" /></i>
            </div>
            <p className="profil_reviews_list_review_content-p">"{review.content}"</p>
        </section>
    </article>
    
    )   
}
export default Review;