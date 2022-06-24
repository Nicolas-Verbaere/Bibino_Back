import './Biere.scss';
import { useEffect } from 'react';
import axios from 'axios';
import Review from "./Review/Review";

function Biere({ biereId, setBiere, biere, setBiereId}) {
    // console.log(biereId);
    // console.log(biere);
    // setBiereId(biere.id);
    function getBiereById(){
        axios.get(`https://bibinov1.herokuapp.com/beer/${biereId}`, 
          // {
          //   headers: {
          //     Authorization: `bearer ${userToken}`
          //   },
          // }
          )
        .then(function (response) {
          // console.log(response.data)
          console.log(response.data)
          setBiere(response.data);
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(function (){
    
        });
      }

      console.log("biere:");
      console.log(biere.review)

      useEffect(() => {   
        getBiereById();   
      }, []);
    return (
        <>
            <article className="biere">
                <img className="biere-img" src={process.env.PUBLIC_URL + `/img/${biere.name}.jpg`} alt="" />
                <div className="biere_contain">
                    <h1 className="biere_contain-name">{biere.name}</h1>
                    <p className="biere_contain-style"><strong>Style:</strong> {biere.style} </p>
                    <p className="biere_contain-color"><strong>Color:</strong> {biere.color} </p>
                    <p className="biere_contain-alcohol"><strong>Alcool:</strong> {biere.alcohol_level}  °</p>
                    <p className="biere_contain-brewery"><strong>Brasserie:</strong> {biere.brewery} </p>
                    <p className="biere_contain-country"><strong>Origine:</strong> {biere.country}  </p>
                    <p className="biere_contain-description"><strong>Description:</strong> {biere.description} </p>
                    <p className="biere_contain-star"><strong>Note:</strong> </p>
                </div>
            </article>

            
            {biere?.review?.map((review) => (
                <Review key={review.review.id} review={review} />
            ))}
                
            
              
        </>
    )
}

export default Biere;