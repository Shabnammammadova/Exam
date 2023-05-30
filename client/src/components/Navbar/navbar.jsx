import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import "./navbar.css"
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
  <>
    <Box sx={{ flexGrow: 1}}   >
      <AppBar position="fixed" >
        <Toolbar className='appbar'>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img  className='robotics' src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="" />
          </Typography>
       
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="">Home</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/about">About Us</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/services">Services</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/products">Products</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/blog">Blog</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/contact">Contact</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/dropdown">DropDown</Link>
        <Link  style={{color:"white",textDecoration:"none",marginLeft:"15px"}} to="/add">Add</Link>


    
        
        </Toolbar>
      </AppBar>
    </Box>
  
 
  </>
  )
}

export default navbar