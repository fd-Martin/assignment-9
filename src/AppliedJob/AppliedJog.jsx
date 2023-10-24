import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Featuredjob from '../Home/featuredJob/featuredjob';
import SingleJob from './SingleJob/SingleJob';
import FeaturedJobSection from '../Home/FeaturedJobSection/FeaturedJobSection';
import Nojob from './NoJob/Nojob';

const AppliedJob = () => {
    const savedJob = useLoaderData();

    console.log(savedJob.length);
    return (
        <div>
            <div className="container max-w-6xl mx-auto px-5 py-0 bg-violet-50 ">
                <div className="bg-image top-left">
                </div>
                <div className="bg-image bottom-right">
                </div>
                <div className="grid h-32 place-content-center">
                    <h1 className='text-2xl font-bold'>Applied Jobs</h1>
                </div>


            </div>

            <div className='py-20'>

                {savedJob.length === 0 ? <Nojob></Nojob> :

                    savedJob.map(job => <SingleJob job={job}></SingleJob>)

                }


            </div>



        </div>
    );
};

export default AppliedJob;