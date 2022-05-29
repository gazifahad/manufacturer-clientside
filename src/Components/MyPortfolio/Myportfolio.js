import React from 'react';
import freshStock from '../../assets/freshStock.png';
import rajuStall from '../../assets/rajuStall.png';
import smartWatch from '../../assets/smartWatch.png';

const Myportfolio = () => {
    return (
        <div>
           <div className='px-12 mt-20'>
           <p><span className='font-bold'>Name: </span><span>Faisal</span></p>
           <p><span className='font-bold'>Email: </span><span>abdullah71faisal@gmail.com</span></p>
           <p><span className='font-bold'>Education: </span><span>Honours at King Khalid University</span></p>
           <p><span className='font-bold'>Technologies: </span><span>React, React Query, React Router, Firebase, Mongodb, Tailwind, BootsStrap5, Javasript, Html5, Css 3</span></p>
           </div>
           <p className='font-bold text-2xl text-center text-primary my-20'>My Works:</p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                   <div className='cursor-pointer'>
                        <a className='text-primary' target="_blank" href='https://assignment-11-e31bf.web.app'><img className='' src={freshStock} alt="" /></a>
                   </div>
                   <div className='cursor-pointer'>
                        <a className='text-primary' target="_blank" href='https://astounding-lokum-852ecb.netlify.app/'><img className='' src={rajuStall} alt="" /></a>
                   </div>
                   <div className='cursor-pointer'>
                        <a className='text-primary' target="_blank" href='https://merry-kelpie-54e4ca.netlify.app/'><img className='' src={smartWatch} alt="" /></a>
                   </div>
               </div>
        </div>
    );
};

export default Myportfolio;