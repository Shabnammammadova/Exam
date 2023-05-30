import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.css"
const footer = () => {
  return (
<>

<div className='footer' style={{display:"flex"}}> 
<div style={{padding:"10%"}}>
  <p style={{color:"white",marginLeft:"200px"}}>
  Copyright ©2023 All rights reserved | This template is made with  by <span style={{color:"#959BFF"}}>Colorlib </span> 
  </p>

</div>


<div style={{color:"white",padding:"10%",gap:"10px",display:"flex"}}>
  <div className='facebook'>
  <FacebookIcon style={{marginTop:"2px"}}/>
  </div>
<div className='twitter'>
<TwitterIcon style={{marginTop:"2px"}}/>
</div>

<div className='ball'>
<SportsBasketballIcon style={{marginTop:"2px"}} />
</div>
<div className='instagram'>
<InstagramIcon style={{marginTop:"2px"}} />
</div>

</div>

</div>
</>
  )
}

export default footer