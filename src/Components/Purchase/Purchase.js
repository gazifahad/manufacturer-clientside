import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';

import banner from '../../assets/bannerImg1.png'

const Purchase = () => {    
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const [product,setProduct] = useState({});

    const {id} = useParams(); 
    const navigate = useNavigate(); 
    
    useEffect(() => {
      const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,                
        };
      axios.get(`https://immense-oasis-80254.herokuapp.com/product/${id}`,{headers})
    .then(data => setProduct(data.data))
    }, [id])
  
      if(loading || !product ){
        return <Loading></Loading>
    }
    const handleFormSubmit = data =>{
        console.log(data);
        const order = {
          productId: id,          
          productName: product.productName,
          orderQuantity: data.amount,          
          totalAmount: data.amount*product.perUnitPrice,
          transactioId:"Not Paid",
          orderedBy: user.email,
          phone: data.phone,
          address: data.address,
          isPaid:false,
          isShiped:false
        }
        axios.post(`https://immense-oasis-80254.herokuapp.com/order`, order)
        .then(data => {
          console.log("Order created ", data.data)

          if(data.data.success){
            navigate(`/payment/${data.data.result.insertedId}`);
          }
        })   
        };
    
    
    return (
        <div>            
    <form onSubmit={handleSubmit(handleFormSubmit)}>
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
  <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Product: {product.productName}</h2>

    <div className="mb-3">
        <img src={product.img} alt="" />          
      </div>
    </div>
    </div>

    <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">Order Info</h2>

    <div className="mb-3">
    <label className="label">Product Name</label>
      <input type="text" disabled className="input input-bordered w-full max-w-xs" defaultValue={product.productName}  {...register("productName")} />
      {setValue("productName", product.productName)}      
      </div>

    <div>
    <p>Avaibale Quantity: {product.availableQuantity}</p>  
    <p>Miniumum Order Amount: {product.minOrder}</p> 

    </div>    
    <div>
    <p>Per Piece Price: $ {product.perUnitPrice}</p> 
     
  </div>    
    
      <div className="mb-3">
        <label className="label">Quantity</label>
      <input type="text" placeholder="Quantity" className="input input-bordered w-full max-w-xs" {...register("amount",{ min: product.minOrder, max: product.availableQuantity }, { required: true })} />
      {errors.amount && "Amount can't be less than MINIMUM ORDER amount and more than AVAILABE amount"}
      </div>
           
     
    </div>
    </div>

        <div className="card w-96 bg-base-100 shadow-xl mx-auto">  
  <div className="card-body">
    <h2 className="mb-3 card-title">User Info</h2>

    
    <div className="mb-3">
      <input type="text" disabled className="input input-bordered w-full max-w-xs" defaultValue={user.displayName}  {...register("displayName")} />
      {setValue("displayName", user.displayName)}      
      </div>
    <div className="mb-3">
      <input type="email" disabled className="input input-bordered w-full max-w-xs" defaultValue={user.email}  {...register("email")} />
      {setValue("email", user.email)}      
      </div>
      
      <div className="mb-3">
      <input type="text" placeholder="Phone: 0171565656" className="input input-bordered w-full max-w-xs" {...register("phone", { required: true })} />
      {errors.phone && "Phone No is required"}
      </div>      
      <div className="mb-3">
      <input type="text" placeholder="Address : Road, City, State" className="input input-bordered w-full max-w-xs" {...register("address", { required: true })} />
      {errors.address && "Phone No is required"}
      </div>      
      
      <div className="mb-3 card-actions">
      <button type="submit" className="btn btn-primary w-full">Confirm Order</button>
    </div>
    </div>
    </div>          
    </div>    
    </form> 
        </div>
    );
};

export default Purchase;