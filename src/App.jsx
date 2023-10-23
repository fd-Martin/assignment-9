import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Navber from './Navber/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
      <div className='min-h-[calc(100vh-300px)]'>
        <Outlet></Outlet>
      </div>
      <Toaster></Toaster>
      <Footer></Footer>
    </>
  )
}

export default App 
