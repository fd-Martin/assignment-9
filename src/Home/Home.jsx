import React from 'react';
import Banner from './Banner/Banner';
import CategorySection from './CategorySection/CategorySection';

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
                <h1>This is home components 3</h1>
            </div>
        </div>
    );
};

export default Home;