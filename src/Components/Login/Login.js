import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, signOut, useSignInWithFacebook, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Common/Loading";
import useToken from "../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user, loading, fError] = useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, cError] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [token] = useToken(gUser || eUser);


  const handleFormSubmit = data =>{  
    signInWithEmailAndPassword(data.email, data.password);    
    };  

    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(()=> {
      if(token){
        navigate(from, { replace: true });
      }
    } ,[token])

    if(eLoading || gLoading ){
      return <Loading></Loading>
  }


   
  return (
    <div>  
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Please Log in</h2>

    {cError ? <p className="p-3 my-8 rounded-sm text-red-600 bg-red-200">Invalid Email Or Password</p> : <p></p>}

    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
      <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: true })} />
      {errors.email?.type === 'required' && "Email is required"}
      </div>
      
      <div className="mb-3">
      <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
      {errors.password && "Password is required"}
      </div>
      
      <label className="label">
            <a href=""onClick={async () => {await sendPasswordResetEmail()}} className="btn btn-ghost label-text-alt link link-hover">Forgot password?</a>
          </label>

      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Log in</button>
    </div>  

    <p className="mt-5">Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link></p>    
     
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

export default Login;
