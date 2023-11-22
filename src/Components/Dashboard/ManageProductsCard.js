import axios from 'axios';
import React from 'react';

const ManageProductsCard = ({product}) => {
    const deleteProduct = () => {
        axios.delete(`https://manufacturer-epp7.onrender.com/product/${product._id}`).then(data => console.log(data.data))
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='m-5 w-44' src={product.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.productName}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <button onClick={deleteProduct} className="btn btn-sm bg-red-500 text-white">Delete</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ManageProductsCard;