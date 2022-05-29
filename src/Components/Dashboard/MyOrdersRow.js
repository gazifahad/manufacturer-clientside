import React from 'react';

const MyOrdersRow = ({order, index}) => {
    return (
        <tr>
        <th>{index+1}</th>
        <td>{order.productName}</td>
        <td>{order.orderQuantity}</td>
        <td><button className='btn btn-sm bg-yellow-500'>Cancel</button></td>        
      </tr>
    );
};

export default MyOrdersRow;