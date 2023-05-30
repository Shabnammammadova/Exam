import React from 'react'
import "./cards.css"
// import { useState,useEffect } from 'react'


const cards = () => {

    // const[robot,setRobot]=useState([])

    // useEffect(()=>{
    //     fetch("http://localhost:8080/api/robot")
    //     .then(res=>res.json)
    //     .robot(data=>setRobot(data))
    // })


  return (


//   (robot & robot.map(robot)=>(


//   ))
<>

<div>
    <h2 style={{textAlign:"center",marginTop:"100px",fontSize:"35px"}}>Featured Robotics Products to Show</h2>
    <p style={{textAlign:"center",color:"gray"}}>Who are in extremely love with eco friendly system.</p>
</div>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",marginTop:"30px"}}>
<div className='box1'>
    <div  style={{backgroundColor:"whitesmoke"}}  >
    <img style={{marginLeft:"50px",marginTop:"15px"}}  src="https://preview.colorlib.com/theme/robotics/img/p1.png" alt="" />
    </div>

<div  >
<h3 style={{textAlign:"center",marginTop:"10px"}}>The Upper Eye</h3>
<h5 style={{textAlign:"center",color:"gray",marginTop:"10px"}}>Who are in extremely love with <br /> eco friendly system.</h5>
<button className='button2' style={{marginTop:"15px",marginLeft:"25px"}}>VIEW DETAILS</button>
</div>

</div>
<div className='box1'>
    <div  style={{backgroundColor:"whitesmoke"}} >
    <img style={{marginLeft:"50px",marginTop:"15px"}}  src="https://preview.colorlib.com/theme/robotics/img/p2.png" alt="" />
    </div>

<div>
<h3 style={{textAlign:"center",marginTop:"10px"}}>The Upper Eye</h3>
<h5 style={{textAlign:"center",color:"gray",marginTop:"10px"}}>Who are in extremely love with <br /> eco friendly system.</h5>
<button className='button2' style={{marginTop:"15px",marginLeft:"25px"}}>VIEW DETAILS</button>
</div>

</div>
<div className='box1'>
    <div  style={{backgroundColor:"whitesmoke"}} >
    <img style={{marginLeft:"50px",marginTop:"15px"}}  src="https://preview.colorlib.com/theme/robotics/img/p3.png" alt="" />
    </div>

<div  >
<h3 style={{textAlign:"center",marginTop:"10px"}}>The Upper Eye</h3>
<h5 style={{textAlign:"center",color:"gray",marginTop:"10px"}}>Who are in extremely love with <br /> eco friendly system.</h5>
<button className='button2'  style={{marginTop:"15px",marginLeft:"25px"}}>VIEW DETAILS</button>
</div>

</div>
<div className='box1'>
    <div  style={{backgroundColor:"whitesmoke"}} >
    <img style={{marginLeft:"50px",marginTop:"15px"}}  src="https://preview.colorlib.com/theme/robotics/img/p4.png" alt="" />
    </div>

<div>
<h3 style={{textAlign:"center",marginTop:"10px"}}>The Upper Eye</h3>
<h5 style={{textAlign:"center",color:"gray",marginTop:"10px"}}>Who are in extremely love with <br /> eco friendly system.</h5>
<button className='button2' style={{marginTop:"15px",marginLeft:"25px"}}>VIEW DETAILS</button>
</div>

</div>


</div>


</>
  )
}

export default cards