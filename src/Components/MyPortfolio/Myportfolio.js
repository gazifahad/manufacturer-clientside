import React from 'react';
import freshStock from '../../assets/freshStock.png';
import rajuStall from '../../assets/rajuStall.png';


const Myportfolio = () => {
    return (
        <div>
           <div className='px-12 mt-20'>
           <p><span className='font-bold'>Name: </span><span>Saiful Islam</span></p>
           <p><span className='font-bold'>Email: </span><span>Gazifahad3@gmail.com</span></p>
           <p><span className='font-bold'>Education: </span><span>BSC from Daffodil International University</span></p>
           <p><span className='font-bold'>Technologies: </span><span> Html5, Css 3, React, React Query, React Router, Firebase, Mongodb, Tailwind, BootsStrap5, Javasript</span></p>
           </div>
           <p className='font-bold text-2xl text-center text-primary my-20'>My Works:</p>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                   <div className='cursor-pointer'>
                        <a className='text-primary' target="_blank" href='https://warehouse-green.netlify.app'><img className='' src={freshStock} alt="" /></a>
                   </div>
                   <div className='cursor-pointer'>
                        <a className='text-primary' target="_blank" href='https://fi-assignment1.web.app/'><img className='' src={rajuStall} alt="" /></a>
                   </div>
                  
               </div>
        </div>
    );
};

export default Myportfolio;