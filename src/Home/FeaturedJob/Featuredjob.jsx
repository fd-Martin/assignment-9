import React from 'react';
import { Link } from 'react-router-dom';

const Featuredjob = ({ job }) => {
    const { id, companyLogo, jobTitle, jobType, companyName, location, salary } = job;

    return (
        <div className='w-4/5 mx-auto md:w-full  '>
            <div className=' rounded-md border-2   w-full p-5 '>
                <img src={companyLogo} className="rounded-xl w-44 h-44 p-4 mx-auto md:mx-0" alt="" />
                <h2>{companyName}</h2>
                <h2>{jobTitle}</h2>

                {
                    jobType.map((job, i) => <button className='border-2 border-violet-500 text-violet-500 rounded-md font-bold px-2 py-1 mr-2 my-2' key={i}>{job}</button>)
                }

                <div className='flex flex-col md:flex-row gap-4 py-1'>
                    <div className='flex  flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                        <p>{location}</p>
                    </div>
                    <div className='flex  flex-row'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>{salary}</p>

                    </div>
                </div>
                <div className='mt-5'>
                    <button className=' bg-gradient-to-r  from-blue-500 to-purple-500 text-base text-white px-5 py-2  rounded-md '>
                        <Link to={`/jobs/${id}`} className='p-2 '>View Details</Link>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Featuredjob;