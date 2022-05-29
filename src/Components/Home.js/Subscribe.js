import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Subscribe = () => {
    const [user, loading, error] = useAuthState(auth);


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Subscribe our Newsletter!</h1>
      <p className="py-6">Want to get Offers First? We'll send offers and discount updates to your mail!</p>
    </div>
    <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        
      <div className="card-body">
      <div className="form-control">
  <div className="input-group ">
    <input type="email" placeholder={user ? user.email : "your@mail.com"} className="input input-primary outline-none " />
    <button className="btn btn-primary">Subscribe</button>
  </div>
</div>        
        
       
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Subscribe;