import React from 'react';
import { Grid, Paper, SvgIcon, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import './Dasboard-body.css';
import { styled } from '@mui/system';
import SquareSharpIcon from '@mui/icons-material/SquareSharp';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '10px',
  textAlign: 'right',
  color: 'black',

}));


function DashboardBody() {
  const [alignment, setAlignment] = React.useState('TargetvsActual');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [time, setTime] = React.useState('M');

  const handleTime = (event, newTime) => {
    setTime(newTime);
  };

  return (
    <Grid container spacing={1}>

      <Grid item lg={12} md={12} xs={12} >
        <Item>
          <Grid container spacing={1}>
            <Grid item lg={7} md={7} sm={7} >
              <Grid container spacing={-1}>
                <Grid item lg={8} md={8} sm={8} >
                </Grid>
                <Grid item lg={4} md={4} sm={4} >
        
                  <SquareSharpIcon color="action" />Target&nbsp; <SquareSharpIcon color="primary" />Actual 
                </Grid>
                {/* <Grid item lg={2} md={2} sm={2} >

                  <Typography><SquareSharpIcon color="primary" />Actual </Typography>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item lg={5} md={5} sm={5} >

              <Grid container spacing={1}>
                <Grid item lg={7} md={7} sm={7} style={{ display: "flex", alignItems: "left" }}>
                  <Grid item className='manageToggleButtonSize' style={{ display: "flex", alignItems: "left" }} >
                    <ToggleButtonGroup
                      color="primary"                      
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      style={{ height: 30 }}
                    >
                      <ToggleButton value="TargetvsActual">Target vs. Actual</ToggleButton>
                      <ToggleButton value="PriorvsCurrent">Prior vs. Current</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
                <Grid item lg={5} md={5} sm={5} style={{ display: "flex", alignItems: "right" }} >
                  <Grid item style={{ display: "flex", alignItems: "right" }} >
                    <ToggleButtonGroup
                      value={time}
                      color="primary"
                      exclusive
                      onChange={handleTime}
                      style={{ height: 30 }}
                    >
                      <ToggleButton value="M" >
                        M
                      </ToggleButton>
                      <ToggleButton value="3M" >
                        3M
                      </ToggleButton>
                      <ToggleButton value="6M" >
                        6M
                      </ToggleButton>
                      <ToggleButton value="YTD" >
                        YTD
                      </ToggleButton>
                      <ToggleButton value="1Y"  >
                        1Y
                      </ToggleButton>
                    </ToggleButtonGroup>

                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
}

export default DashboardBody;