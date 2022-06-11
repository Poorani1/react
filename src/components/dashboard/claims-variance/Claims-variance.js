import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import './Claims-variance.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '10px',
  textAlign: 'left',
  color: 'black',

}));

function ClaimsVariance() {
  const [hcc, setHcc] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setHcc(event.target.value);
  };
  return (

    <Grid item lg={12} md={12} sm={12}>
      <Item >
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} >
            <Typography><span>ClaimsVariance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="hcc-high-label">HCC High</InputLabel>
                <Select
                  labelId="hcc-high-label"
                  id="hcc-high"
                  value={hcc}
                  label="Incured Ending Month"
                  onChange={handleChange}
                  style={{ height: 40 }}
                  
                >
                  
                  <MenuItem value={1}>Pharmacy</MenuItem>
                  <MenuItem value={2}>Inpatient</MenuItem>
                  <MenuItem value={3}>Outpatient</MenuItem>
                </Select>
              </FormControl>
            </Typography>

          </Grid>
          {/* <Grid item lg={9} md={9} sm={9}  >
            <Typography>
              

            </Typography>
          </Grid> */}
        </Grid>
      </Item>
    </Grid>
  );
}

export default ClaimsVariance;