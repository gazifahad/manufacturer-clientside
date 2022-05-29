import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='text-center my-20'>
            <div className='bg-gradient-to-r from-transparent via-slate-300 to-transparent'>

    <div className="flex flex-col lg:flex-row align-middle">
  
  <div className="stat">
    <div className="stat-title">Monthly Revenue</div>
    <div className="stat-value text-orange-700">31K</div>    
  </div>
  
  <div className="stat">
    <div className="stat-title">Monthly Orders</div>
    <div className="stat-value text-orange-700">4,200</div>    
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Products</div>
    <div className="stat-value text-orange-700">1,200</div>    
  </div>
  
</div>
            </div>
        </div>
    );
};

export default BusinessSummery;