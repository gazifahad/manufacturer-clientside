import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center">
    {/* <!-- Page content here --> */}    
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="">My Profile</Link></li>
      { admin 
      ? 
      <>
      <li><Link to="manageorders">Manage All Oders</Link></li>
      <li><Link to="addproduct">Add A Product</Link></li>
      <li><Link to="manageproducts">Manage All Products</Link></li>
      <li><Link to="makeadmin">Make Admin</Link></li>
      </>
      :
        <>
        <li><Link to="myorders">My Orders</Link></li>
        <li><Link to="addreview">Add A Review</Link></li>
        </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;