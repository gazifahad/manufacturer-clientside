import React from "react";
import electrician from '../../assets/electrician.png'
const WhyChooseUs = () => {
  return (
    <div className="my-20">      
      <div>
        <div className="min-h-screen0">
          <div className="flex flex-col lg:flex-row justify-evenly items-center">
            <div>
            <img
              src={electrician}
              className="max-w-sm rounded-lg"
            />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Why Choose Us?</h1>
              <p className="py-6">We provide authentic products with minmal price, and 100% qualitiy assurance.Safe payment is a bonus</p>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
