import React from 'react';

const MakeAdminRow = ({user, index}) => {
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user.email}</td>
        <td><button className='btn btn-sm bg-green-500'>Make Admin</button></td>        
      </tr> 
    );
};

export default MakeAdminRow;