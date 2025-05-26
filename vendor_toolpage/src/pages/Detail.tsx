'use client'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React,{useState} from 'react';
const Detail = () => {
  const oLink=window.location.origin;
  const [appLink,setAppLink]=useState(oLink+'/po_dashboard/index.html');
   
  return (
      <Box
        component="iframe"
        src={appLink} // Replace with actual URL
        sx={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      /> 
  )
}

export default Detail;



