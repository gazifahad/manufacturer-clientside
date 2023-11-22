import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const navigate=useNavigate();

    const imageStorageKey = 'e78da33c842185d44c2a1730e841497b';

    const handleFormSubmit = async data => {
        const formData = new FormData();
        const productImage = data.productImg[0];
        formData.append('image', productImage);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        productName: data.productName,
                        img: img,
                        description: data.description,
                        minOrder: data.orderQuantity,
                        availableQuantity: data.availableQuantity,
                        perUnitPrice: data.price,
                        addedBy: user.email

                    }
                    axios.post('https://manufacturer-epp7.onrender.com/product', product)
                        .then(data =>  data.status===200&&((alert('product added succesfully'))&navigate('/')))
                }
            })


        console.log(data);
    };

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="mb-3 card-title">Add a product</h2>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
                        <div className="mb-3">
                            <input type="email" disabled className="input input-bordered w-full max-w-xs" value={user.email}  {...register("email")} />
                            {setValue("email", user.email)}
                        </div>

                        <div className="mb-3">
                            <input placeholder="Product Name" className="input input-bordered w-full max-w-xs" {...register("productName", { required: true })} />
                            {errors.productName && "Product Name is required"}
                        </div>

                        <div className="mb-3">
                            <textarea placeholder="Product Description" className="textarea textarea-bordered w-full max-w-xs" {...register("description", { required: true })} />
                            {errors.description && "Description is required"}
                        </div>

                        <div className="mb-3">
                            <input type="text" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs"  {...register("availableQuantity", { required: true })} />
                            {errors.availableQuantity?.type === 'required' && "Quantity is required"}
                        </div>

                        <div className="mb-3">
                            <input type="text" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs"  {...register("orderQuantity", { required: true })} />
                            {errors.orderQuantity?.type === 'required' && "Order Quantity is required"}
                        </div>

                        <div className="mb-3">
                            <input type="text" placeholder="Price (Per Unit)" className="input input-bordered w-full max-w-xs"  {...register("price", { required: true })} />
                            {errors.price?.type === 'required' && "Price is required"}
                        </div>

                        <div className="my-6">
                            <input type="file" accept="image/*" className="block file:border-solid w-full max-w-xs  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:bg-orange-50 file:text-primary hover:file:bg-orange-200"  {...register("productImg", { required: true })} />
                            {errors.productImg?.type === 'required' && "Product Image is required"}
                        </div>

                        <div className="mb-3 card-actions">
                            <button type="submit" className="btn btn-primary w-full">Add Product</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;