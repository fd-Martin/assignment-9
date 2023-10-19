import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className="bg-violet-200 ">
            <div className="navbar max-w-4xl mx-auto px-5 py-2">


                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/statistic">Statistic</Link></li>
                            <li><Link to="/job">Applied Job</Link></li>
                            <li><Link to="/blog">Blog</Link></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>


                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/statistic">Statistic</Link></li>
                        <li><Link to="/job">Applied Job</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>


                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;