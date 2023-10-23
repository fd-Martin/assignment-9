import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../DataBase/fakedb';
import '../JobDetails/JobDetails.css'
import vector1 from './Vector1.png'
import vector2 from './Vector2.png'
const JobDetails = () => {
    const jobDetails = useLoaderData();
    // console.log(jobDetails);
    const {
        id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, fulltimeOrParttime, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, phone, email } = jobDetails;

    const addToApplyJob = id => {
        addToDb(id);
    }


    return (

        <div>
            <div className=''>
                <div className="container max-w-6xl mx-auto px-5 py-0 bg-violet-50 ">
                    <div className="bg-image top-left">
                    </div>
                    <div className="bg-image bottom-right">
                    </div>
                    <div className="grid h-32 place-content-center">
                        <h1 className='text-2xl font-bold'>Job Details</h1>
                    </div>


                </div>



                <div className='flex flex-col md:flex-row max-w-4xl mx-auto px-5 py-16   '>
                    <div className='p-5 b  w-full md:w-3/5'>
                        <div className='py-5 text-justify'>
                            <h1>
                                <span className='font-bold'>Job Description:</span>  {jobDescription}</h1>
                        </div>
                        <div className='py-5 text-justify'>
                            <h1>
                                <span className='font-bold'>Job Responsibility: </span>
                                {jobResponsibility}
                            </h1>

                        </div>
                        <div className='pt-3 text-justify'>
                            <h1 className='font-bold'>Educational Requirements:</h1>
                        </div>
                        <div className=''>
                            <p className='font-normal pt-5'>{educationalRequirements}</p>
                        </div>
                        <div className='pt-3 text-justify'>
                            <h1 className='font-bold'>Experiences::</h1>
                        </div>
                        <div className=''>
                            <p className='font-normal pt-5'>{experiences}</p>
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 px-3 pt-11'>

                        <div class="grid grid-cols-1 bg-gradient-to-r  from-blue-100 to-purple-100 text-base text-white px-5 py-2 px-5">
                            <div className='border-b-2 border-black'>
                                <h1 className='font-bold py-4 text-black'>Job Details</h1>
                            </div>

                            <div className='grid grid-cols-1 gap-1 py-5'>
                                <h1 className=' pb-2 text-black'> <span className='font-bold  text-gray-600'>Salary:</span> {salary}</h1>

                                <h1 className='pb-2 text-black'><span className='font-bold  text-gray-600'>Job Title:</span> {jobTitle}</h1>
                            </div>

                            <div className='border-b-2 border-black'>
                                <h1 className='font-bold py-4 text-black'>Contact Information</h1>
                            </div>

                            <div className='grid grid-cols-1 gap-1 py-5'>
                                <h1 className=' pb-2 text-black'> <span className='font-bold  text-gray-600'>Phone:</span> {phone}</h1>

                                <h1 className='pb-2 text-black'><span className='font-bold  text-gray-600'>Email:</span> {email}</h1>
                                <h1 className='pb-2 text-black'><span className='font-bold  text-gray-600'>Address:</span> {location}</h1>
                            </div>

                        </div>

                        <button className="font-bold mt-9 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  hover:ease-in text-base text-white px-5 py-4  rounded-md w-full" onClick={() => addToApplyJob(id)}>Apply This Job</button>
                    </div>
                </div>

            </div>


        </div >
    );
};

export default JobDetails;