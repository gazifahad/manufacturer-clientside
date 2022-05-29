import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Tools from './Tools';
import Subscribe from './Subscribe';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <WhyChooseUs> </WhyChooseUs>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;