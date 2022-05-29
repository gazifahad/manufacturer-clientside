import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {   
        const headers = { 
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,                
            };     
        axios.get(`http://localhost:5000/products`,{headers})
        .then(data => setProducts(data.data))
    }, [products])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
          products.map((product,index) => <ManageProductsCard
          key={index}
          index={index}
          product={product}
          ></ManageProductsCard>)
      }
        </div>
    );
};

export default ManageProducts;