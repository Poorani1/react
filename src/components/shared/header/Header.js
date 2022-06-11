import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import './Header.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0079C2',  
  padding: '20px',
  textAlign: 'left',
  color: 'white',
  fontstyle: 'italic'
}));

function Header() {
  return (
          
        <Grid item lg={12} md={12} sm={12} >
          <Item>Anthem</Item>
        </Grid>
        
      
    
   
  );
}

export default Header;
