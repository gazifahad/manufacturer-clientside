import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true)
    useEffect(() => {
      const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,                
        };
        axios.get(` https://immense-oasis-80254.herokuapp.com/orders/${user.email}`,{headers})
        .then(data => setOrders(data.data))
        setOrdersLoading(false)
    },[])

    if(loading || ordersLoading){
        return <Loading></Loading>
    }
  
    return (
        <div className="overflow-x-auto p-3">
  <table className="table w-80 h-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Quantity</th>        
        <th>Action</th>        
      </tr>
    </thead>
    <tbody>
    
      {
          orders.map((order,index) => <MyOrdersRow
          key={index}
          index={index}
          order={order}
          ></MyOrdersRow>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default MyOrders;