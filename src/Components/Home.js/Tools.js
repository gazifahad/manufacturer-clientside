import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Common/Loading';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/products')
        .then(data => loadProducts(data.data));  
    },[]);  

    const loadProducts = arr =>{
        setProducts(arr.reverse().slice(0,6));        
    }
    

    if(!products){
        return <Loading></Loading>
    }
    return (
        <div id='tools'>
            <h3 className='text-3xl font-bold text-primary text-center mb-20'>Our Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map((product, index) => <Tool
                    key={index}
                    product={product}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;