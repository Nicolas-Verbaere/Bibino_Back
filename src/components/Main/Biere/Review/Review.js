import './Review.scss';
import IconDelete from '../../../../assets/img/icon_trash.png';
import axios from 'axios';

function Review({review, user, getBiereById }) {

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
                getBiereById();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function handleClick() {
        deleteReview();
        console.log("boop")
    }

    return (
        <>
        {review.content &&
        <article  className="review">
            <section className="review_info">
                <h1 className="review_info-pseudo">{review.author}</h1>
                <p className="review_info-created_at"><strong>Review créé le:</strong> {review.created_at}</p>
                <p className="review_info-note"><strong>Note:</strong> {review.note}/5 </p>
            </section>
            <section className="review_content">
                <div className="review_content_icon">
                    <h1 className="review_content_icon-title">Commentaire: </h1>
                    {review.author === user.alias && 
                    <i onClick={handleClick}><img className="review_content_icon-delete" src={IconDelete} alt="" /></i>
                    }
                </div>
                <p className="review_content-content">{review.content}</p>
            </section>
        </article>
        }
        </>    
    )
}

export default Review;