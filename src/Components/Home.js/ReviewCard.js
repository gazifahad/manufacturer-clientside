import React from 'react';
import profilePhoto from '../../assets/userProfile.png'

const reviewCard = ({review}) => {

    
    const stars = (s => {
        const ratingStar = [];
        for(let i=0; i<s; i++){           
            ratingStar.push("⭐");
        }
        return ratingStar;
        
    }) 
                  
    return (
        <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.comment}</p> 

        <div className='flex'>
            <div className="avatar">
            <div className="w-16 rounded mr-3">
                <img src={profilePhoto} alt="profile" />
            </div>
            </div>
          <div>
            <h2 className="card-title">{review.name}</h2>
            <p>{stars(review.rating)}</p>          
          </div>         
        </div>
        </div>
      </div>
    </div>
    );
};

export default reviewCard;