import { useState } from 'react'

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
      <Footer></Footer>
    </>
  )
}

export default App 
