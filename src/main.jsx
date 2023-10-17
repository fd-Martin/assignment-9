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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/job',
        element: <Job></Job>,
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>,
        loader: () => fetch('assignmentData.json'),
      },
      {
        path: '/blog',
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
