import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

    
    const handleFormSubmit = data =>{  
        const headers = { 
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,                
            };    
      
       const review = {
                name:user.displayName,
                email: user.email,
                rating: data.rating,
                comment: data.comment                 
            }
        axios.post('http://localhost:5000/review', review, {headers})
        .then(data => console.log("Review added: ", data))    
    };      

    if(loading){
            return <Loading></Loading>
        }
    return (
        <div>            
           <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Please Add a review</h2>
           <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
      <div className="mb-3">
      <input type="email" disabled className="input input-bordered w-full max-w-xs" value={user.email}  {...register("email")} />
      {setValue("email", user.email)}      
      </div>
      
      <div className="mb-3">
      <textarea placeholder="Your Comment" className="textarea textarea-bordered w-full max-w-xs" {...register("comment", { required: true })} />
      {errors.comment && "Comment is required"}
      </div>

      <div className="mb-3">
      <input type="text" placeholder="1 ~ 5" className="input input-bordered w-full max-w-xs"  {...register("rating", { required: true })} />
      {errors.rating?.type === 'required' && "Rating is required"}
      </div>      

      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Add Review</button>
    </div>      
     
    </form> 
        </div>
        </div>
        </div>
        
    );
};

export default AddReview;