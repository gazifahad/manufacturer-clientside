import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Common/Loading';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L2IafEwxTNKPPwRKHu6suUkA2Jap7OAZe2u0vuDxM49MFJ38enttLP9vZsdbdy8vetZ9LOtaqcIdNARRSZLo36x00rzmM0umI');

const Payment = () => {
    const {orderId} = useParams();
    const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,                
        };
    const {data : order, isLoading, refetch} = useQuery(['payment', orderId], () => axios.get(`http://localhost:5000/order/${orderId}`,{headers})
    .then()
    )

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='my-16 px-12'>
            <p>Welcome to payment</p>
            <p>Pay For : {orderId}</p>

            <div className='card-body'>
            {/* <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
            </Elements> */}

            </div>
        </div>
    );
};

export default Payment;