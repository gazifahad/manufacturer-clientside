import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Common/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
       
        axios.get('http://localhost:5000/reviews')
    .then(data => reversedReviews(data.data));
    } ,[]);

    const reversedReviews = arr =>{
        setReviews(arr.reverse().slice(0,6));        
    } 

    if(!reviews){
        return <Loading></Loading>
    }
    return (
        <div className='px-12'>
            {/* <p>Total Reviews: {reviews.length}</p> */}
            <h2 className='text-3xl font-bold text-center text-slate-600 my-20'>Customers' Review</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map((review, index) => <ReviewCard
                key={index}
                review={review}
                ></ReviewCard>)
            }
            </div>
        </div>
    );
};

export default Reviews;