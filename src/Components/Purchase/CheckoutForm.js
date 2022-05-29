import React, { useEffect, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({order}) => {

    const {price} = order;

    const stripe = useStripe();
    const elements = useElements();
    const [clientSecrete, setClientSecrete] = useState();

    useEffect(() => {
        axios.post(`http://localhost:5000/create-payment-intent`, price)
        .then(data => {
            if(data?.clientSecrete){
                setClientSecrete(data.clientSecrete);
            }
        })
    },[price])

    const handleSubmit = async e => {
        e.preventDefault();

        if (!stripe || !elements) {            
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }


          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecrete}>
        Pay
      </button>
    </form>

    
        </>
    );
};

export default CheckoutForm;