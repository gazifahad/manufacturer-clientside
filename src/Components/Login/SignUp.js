import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import useToken from '../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user, loading, fError] = useSignInWithFacebook(auth);
    const [createUserWithEmailAndPassword, eUser, eLoading, eError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [token] = useToken(gUser || eUser);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    useEffect(()=> {
      if(token){
        navigate(from, { replace: true });
      }
    } ,[token])

  if(eLoading || gLoading || updating ){
      return <Loading></Loading>
  }
  
  const handleFormSubmit = async data =>{ 
      const displayName = data.name;     
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({displayName});     
    
    };    
  

    return (
        <div>  
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Please Sign up</h2>

    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
      <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs mb-2"  {...register("name", { required: true })} />
      {errors.name?.type === 'required' && "Name is required"}
      </div>

      <div className="mb-3">
      <input type="email" placeholder="Email" name='email' className="input input-bordered w-full max-w-xs mb-2"  {...register("email", { required: true })} />
      {errors.email?.type === 'required' && "Email is required"}
      </div>
      
      <div className="mb-3">
      <input type="password" placeholder="Password" name='password' className="input input-bordered w-full max-w-xs mb-2" {...register("password", { required: true })} />
      {errors.password && "Password is required"}
      </div>

      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Sign up</button>
    </div>   

    <p className="mt-5">Already have an account? <Link to="/login" className="text-primary">Log in</Link></p>   
     
    </form>  

    <div>
        <div className="flex flex-col w-full border-opacity-50">  
            <div className="divider">OR</div> 
        </div>

        <div className="mb-3 card-actions">
            <button  onClick={() => signInWithGoogle()}  className="btn btn-outline btn-accent w-full">Google</button>
        </div> 
        <div className="mb-3 card-actions">
            <button onClick={() => signInWithFacebook()}  className="btn btn-outline btn-accent w-full">Facebook</button>
        </div> 
    </div>
    
  </div>
</div>      
    </div>
    );
};

export default SignUp;