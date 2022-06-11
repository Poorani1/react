import React from 'react';
import { fontWeight, styled } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Paid-claim-pmpm-trend.css';
import { Grid, Paper, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '10px',
  textAlign:'left',


}));
function PaidClaimPMPMTrend() {
  const [pmpm, setPmpm] = React.useState('');

  const handleChange1 = (event) => {
    console.log(event.target.value);
    setPmpm(event.target.value);
  };
  
  const [ibnr, setIbnr] = React.useState('');
  const handleChange2 = (event) => {
    console.log(event.target.value);
    setIbnr(event.target.value);
  };
  const [allseg, setAllseg] = React.useState('');
  const handleChange3 = (event) => {
    console.log(event.target.value);
    setAllseg(event.target.value);
  };
  const [allprod, setAllprod] = React.useState('');
  const handleChange4 = (event) => {
    console.log(event.target.value);
    setAllprod(event.target.value);
  };
  return (

    <Grid item lg={12} md={12} sm={12}>
      <Item >
        
          <Grid item lg={12} md={12} sm={12} >
            <Typography>
             Paid Claims PMPM Trend &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="paid-claims-pmpm-label">Paid Claims PMPM</InputLabel>
                <Select
                  labelId="paid-claims-pmpm-label"
                  id="paid-claims-pmpm"
                  value={pmpm}
                  label="Paid Claims PMPM"
                  onChange={handleChange1}
                >                  
                  <MenuItem value={5}>Allowed Claims PMPM</MenuItem>
                  
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                <InputLabel id="including-ibnr-label">Including IBNR</InputLabel>
                <Select
                  labelId="including-ibnr-label"
                  id="including-ibnr"
                  value={ibnr}
                  label="Including IBNR"
                  onChange={handleChange2}                >
                  
                  <MenuItem value={11}>Excluding IBNR</MenuItem>
                  
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 140 }}size="small" >
                <InputLabel id="all-segments-label">All Segments</InputLabel>
                <Select
                  labelId="all-segments-label"
                  id="all-segments"
                  value={allseg}
                  label="All Segments"
                  onChange={handleChange3}
                >
            
                  <MenuItem value={1}>Individual</MenuItem>
                  <MenuItem value={2}>Small Group</MenuItem>
                  <MenuItem value={3}>Large Group FI</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 130 }}size="small">
                <InputLabel id="all-products-label">All Products</InputLabel>
                <Select
                  labelId="all-products-label"
                  id="all-products"
                  value={allprod}
                  label="All Products"
                  onChange={handleChange4}
                >
                
                  <MenuItem value={10}>HMO</MenuItem>
                  <MenuItem value={20}>PPO</MenuItem>
                  <MenuItem value={30}>EPO</MenuItem>
                </Select>
              </FormControl>
            </Typography>


          </Grid>
          {/* <Grid item lg={8} md={8} sm={8} >
            <Typography>
              
            </Typography>
          </Grid> */}
        
      </Item>
    </Grid>
  );
}

export default PaidClaimPMPMTrend;