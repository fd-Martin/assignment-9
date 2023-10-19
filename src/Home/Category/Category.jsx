import React from 'react';

const Category = ({ category }) => {
    // console.log(category);
    const { id, title, image, job_number } = category;
    return (
        <div>
            <div className="w-48 md:w-52 h-48 items-center md:items-left py-8 px-3 bg-indigo-50 ">
                <img src={image} className="rounded-xl bg-indigo-100 p-4 mx-auto md:mx-0" />
                <div>
                    <h4 className="font-bold">{title}</h4>
                    <p>{job_number}+Jobs Available </p>
                </div>
            </div>
        </div>
    );
};

export default Category;