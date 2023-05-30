import React from 'react'
import Cards from "../../pages/Cards/cards"
import Unique from "../../pages/Unique/unique"
import Blog2 from "../../pages/Blog2/blog2"
import Footer from "../../components/Footer/footer"

import "./home.css"
import { Helmet } from 'react-helmet'

const home = () => {
  return (
<>
<div className='body'>





<div className='image'>
<img style={{marginTop:"250px"}} src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />

</div>


<div style={{marginLeft:"320px",marginTop:"-390px"}}>
   <h1 style={{marginTop:"100px",color:"white",fontSize:"60px"}}>
   Improved <br />
Production level <br />
with Robotics
  </h1>
  <p style={{color:"white",marginTop:"10px"}}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
  <button style={{marginTop:"10px"}} className="button1">VIEW DETAILS</button>
  </div>

</div>

<Helmet>
<title>Learning React Helmet|Home</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>


<Cards/>
<Unique/>
<Blog2/>
<Footer/>





</>
  )
}

export default home