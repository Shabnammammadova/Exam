import React from 'react'
import { Helmet } from 'react-helmet'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from "../../components/Navbar/navbar"
import Footer from "../../components/Footer/footer"
const add = () => {
  return (
    <>
    
    <Helmet>
<title>Learning React Helmet|Add</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>


<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    <Navbar/>
    <Footer  />
    </>

 
  )
}

export default add