import './Review.scss';

function Review({review}) {
    return (
        <article  className="review">
            <section className="review_info">
                <h1>pseudo-review</h1>
                <p>Créé le :</p>
                <p>Note :</p>
            </section>
            <section className="review_content">
                <h1 className="review_content-title">Commentaire: </h1>
                <p className="review_content-content">{review.review.content}</p>
            </section>
        </article>
    )
}

export default Review;