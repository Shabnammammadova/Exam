import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from "../components/Navbar/navbar"



const MainRoot = () => {
  return (
<>
<Navbar/>
<Outlet/>

</>
  )
}

export default MainRoot