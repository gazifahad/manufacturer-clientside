import React from 'react';

const ManageAllOrdersRow = ({order, index}) => {
    return (
        <tr>
        <th>{index+1}</th>
        <td>{order.productName}</td>
        <td>{order.orderedBy}</td>
        <td><button className='btn btn-sm bg-blue-500'>Ship</button></td>        
      </tr>
    );
};

export default ManageAllOrdersRow;