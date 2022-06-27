import './Review.scss';

function Review({review}) {
    return (
        <article  className="review">
            <section className="review_info">
                <h1 className="review_info-pseudo">{review.author}</h1>
                <p className="review_info-created_at"><strong>Review créé le:</strong> {review.created_at}</p>
                <p className="review_info-note"><strong>Note:</strong> {review.note}/5 </p>
            </section>
            <section className="review_content">
                <h1 className="review_content-title">Commentaire: </h1>
                <p className="review_content-content">{review.content}</p>
            </section>
        </article>
    )
}

export default Review;