import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import "./unique.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const unique = () => {
  return (
 <>
 
<div className='unique'  >
<div>

    <h1 style={{textAlign:"center",color:"white"}}>Some Features that Made us Unique</h1>
    <p style={{textAlign:"center",color:"white",marginTop:"10px"}}>Who are in extremely love with eco friendly system.</p>
</div>


 <Box sx={{ flexGrow: 1,width:"1200px",marginLeft:"420px",marginTop:"65px"}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item >
                <div style={{marginLeft:"40px"}} >
                <h3 className="personicon" style={{textAlign:"justify"}}> <PersonIcon/>
Expert Technicians</h3>
<p style={{textAlign:"justify"}}>Usage of the Internet is becoming more <br /> common due to rapid advancement of <br /> technology and power.</p>
                </div>



            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>

</div>


 
 </>
  )
}

export default unique