import React, { useState, useEffect } from "react";
import  '../css/reviews.css';
function Reviews() {

    const [reviews, setReviews] = useState([{ //array of objects
        title:'',
        content:''
    }])

    useEffect(()=>{
        fetch("http://localhost:3001/reviews").then(res=>{ //reviews page are coming from reviewRoute.js
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes =>{
            setReviews(jsonRes);
        })
    },[])

    return (
    <div className="review-class" >
        <h1 >Reviews page</h1>
        {console.log(reviews)}
        <div class="card-deck">
        {reviews.slice(0).reverse().map(review=>
                 <div className='card text-white bg-secondary mb-3' >
                     <div class="card-header">{"Name: "+review.title}</div>
                     <div class="card-body">{review.content}</div>
                 </div>
            )}
        </div>
    </div>
)}


export default Reviews;