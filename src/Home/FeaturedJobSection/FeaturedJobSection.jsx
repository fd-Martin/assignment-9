import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Featuredjob from '../featuredJob/featuredjob';

const FeaturedJobSection = () => {
    const { jobs } = useLoaderData();
    return (
        <div className='featuredJobs'>
            <div className='text-center py-6 w-11/12 mx-auto'>
                <h3 className='text-3xl font-bold py-4'>Featured Jobs</h3>
                <p className='text-base pb-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl justify-items-start mx-auto my-5'>
                {
                    jobs.map(job => <Featuredjob key={job.id} job={job}></Featuredjob>)
                }

            </div>
        </div>
    );
};

export default FeaturedJobSection;