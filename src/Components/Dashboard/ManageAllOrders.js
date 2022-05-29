import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageAllOrdersRow from './ManageAllOrdersRow';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {            
        axios.get(`http://localhost:5000/orders`)
        .then(data => setOrders(data.data))
    }, [orders])
    return (
        <div>
<div className="overflow-x-auto p-3">
  <table className="table w-80 h-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Orderer</th>        
        <th>Action</th>        
      </tr>
    </thead>
    <tbody>
    
      {
          orders.map((order,index) => <ManageAllOrdersRow
          key={index}
          index={index}
          order={order}
          ></ManageAllOrdersRow>)
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default ManageAllOrders;