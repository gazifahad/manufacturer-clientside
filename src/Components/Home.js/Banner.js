import React, { useEffect, useState } from 'react';
import img1 from '../../assets/bannerImg1.png'


const Banner = () => {
    return (
        <div>
           <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img1} alt='' className="max-w-md rounded-lg" />
    
    <div>
      <h1 className="text-5xl font-bold">Get All <span className='text-primary'>Electric Tools!</span></h1>
      <p className="py-6">We are supplying all essential electric tools and accesories at reasonable price! Our producrts are lite-weight, durable and long lasting! Get your tool now </p>
      <a href='#tools' ><button className="btn btn-primary">explore now</button></a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;