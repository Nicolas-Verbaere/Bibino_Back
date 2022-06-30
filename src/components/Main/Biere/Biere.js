import './Biere.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Review from './Review/Review';


function Biere({ biereId, setBiere, biere, setBiereId, user, isLogged, userToken}) {
    // console.log(biereId);

    const [values, setValues] = useState({
        content: '',
        note: '',
        beer_id: '',
        user_account_id: ''
    });

    function getBiereById(){
        
        axios({ method: 'GET',
        url: `https://bibinov1.herokuapp.com/beer/${biereId}`,
        data : {},
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${userToken}`,
        },
        })    
        .then(function (response) {
        //   console.log(response.data)
          setBiere(response.data);
          
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(function (){
    
        });
      }

    function postReview() {
        axios({ method: 'POST',
                url: 'https://bibinov1.herokuapp.com/review',
                data : {

                    content: values.content,
                    note: values.note,
                    beer_id: biereId,
                    user_account_id: user.id,
                },
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${userToken}`,
                },
            })     
            

            .then(function (response) {
                console.log('envoyer une review');
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                getBiereById();
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('refresh prevented');
        postReview();
        setValues({ ...values, content: '', note: '' });
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    // console.log(biere);
      useEffect(() => {  
        getBiereById();   
      }, [biereId]);

    return (
        <>
            <article className='biere'>
                <img
                    className='biere-img'
                    src={process.env.PUBLIC_URL + `/img/${biere.name}.jpg`}
                    alt=''
                />
                <div className='biere_contain'>
                    <h1 className='biere_contain-name'>{biere.name}</h1>
                    <p className='biere_contain-style'>
                        <strong>Style:</strong> {biere.style}{' '}
                    </p>
                    <p className='biere_contain-color'>
                        <strong>Couleur:</strong> {biere.color}{' '}
                    </p>
                    <p className='biere_contain-alcohol'>
                        <strong>Alcool:</strong> {biere.alcohol_level} °
                    </p>
                    <p className='biere_contain-brewery'>
                        <strong>Brasserie:</strong> {biere.brewery}{' '}
                    </p>
                    <p className='biere_contain-country'>
                        <strong>Origine:</strong> {biere.country}{' '}
                    </p>
                    <p className='biere_contain-description'>
                        <strong>Description:</strong> {biere.description}{' '}
                    </p>
                    <p className='biere_contain-star'>
                        <strong>Note:</strong> {biere.note?.average}/5{' '}
                    </p>
                </div>
            </article>


            {isLogged && 
            <form className="addReview" onSubmit={handleSubmit}>
                <h1 className="addReview-title">Donnez nous votre avis!</h1>
                <section className="addReview_review">
                    <p className="addReview_review-note">
                        <strong>Note: </strong>
                        <input 
                            className="addReview_review-note-input" 
                            name='note'
                            value={values.note}
                            type="number" 
                            step=".1"
                            min="0"
                            max="5"
                            required
                            onChange={onChange}
                            >
                        </input>
                        /5
                    </p>
                    <div className="addReview_review_resizeContent">
                        <textarea 
                            className="addReview_review_resizeContent-content" 
                            name='content'
                            value={values.content}
                            placeholder="Saisissez votre avis ici..."
                            onChange={onChange}
                            >
                        </textarea> 
                    </div>
                </section>
                <button className="addReview_review-submit" >Envoyer la review</button>
            </form>
            }
            

            {biere?.reviews?.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </>
    );
}

export default Biere;
