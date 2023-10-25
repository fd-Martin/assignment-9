import React from 'react';
import Banner from './Banner/Banner';
import CategorySection from './CategorySection/CategorySection';
import FeaturedJobSection from './FeaturedJobSection/FeaturedJobSection';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <CategorySection></CategorySection>
            </div>
            <div>
                <FeaturedJobSection></FeaturedJobSection>
            </div>
        </div>
    );
};

export default Home;


