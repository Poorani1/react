import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import './Dashboard-Header.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',  
  padding: '1px',
  textAlign: 'left',
  color: 'black',
  fontstyle: 'italic'
}));

function DashboardHeader() {
  return (
          
        <Grid item lg={12} md={12} sm={12} >
          <Item>Executive Dashboard</Item>
        </Grid>
      
    
   
  );
}

export default DashboardHeader;
