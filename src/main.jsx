import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Job from './Job/Job.jsx';
import Home from './Home/Home.jsx';
import Statistic from './Statistic/Statistic.jsx';
import Blog from './Blog/Blog.jsx';
import JobDetails from './Home/JobDetails/JobDetails.jsx';
import AppliedJob from './AppliedJob/AppliedJog.jsx';
import appliedJobLoader from './DataBase/customLoader.js';
import Error from './Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const res1 = await fetch('/catagoryData.json');
          const categories = await res1.json();
          const res2 = await fetch('/featuredJobDaba.json');
          const jobs = await res2.json();
          return { categories, jobs };
        },
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const res2 = await fetch('/featuredJobDaba.json');
          const jobs = await res2.json();
          const jobDetails = jobs.find(job => job.id == params.id);
          return jobDetails;
        },
      },
      {
        path: '/job',
        element: <AppliedJob></AppliedJob>,
        loader: appliedJobLoader,
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>,
        loader: () => fetch('assignmentData.json'),
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
