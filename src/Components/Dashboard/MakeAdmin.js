import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {        
        axios.get(`https://immense-oasis-80254.herokuapp.com/users`)
        .then(data => setUsers(data.data))
    }, [users])

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>User Email</th>
        <th>Make Admin</th>       
                
      </tr>
    </thead>
    <tbody>
    
      {
          users.map((user,index) => <MakeAdminRow
          key={index}
          index={index}
          user={user}
          ></MakeAdminRow>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MakeAdmin;