import React from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const CategorySection = () => {
    const categories = useLoaderData();

    return (
        <div>
            <div className='text-center py-6 w-11/12 mx-auto'>
                <h3 className='text-3xl font-bold py-4'>Job Category List</h3>
                <p className='text-base pb-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl justify-items-center  mx-auto my-5'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategorySection;