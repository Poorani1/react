import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Home-Page.css';
import DashboardBody from '../dashboard-body/Dasboard-body';
import PerformanceHighlights from '../performance-highlights/Performance-Highlights';
import PaidClaimPMPMTrend from '../paid-claim-pmpm-trend/Paid-claim-pmpm-trend';
import ClaimsVariance from '../claims-variance/Claims-variance';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow1() {
  return (
    <React.Fragment>
      <PerformanceHighlights />
    </React.Fragment>
  );
}

function FormRow2() {
  return (
    <React.Fragment>
      <PaidClaimPMPMTrend />
      <ClaimsVariance />
    </React.Fragment>
  );
}


export default function HomePage() {
  return (

    <Box lg={{ flexGrow: 1 }} md={{ flexGrow: 1 }} sm={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item lg={12} md={12} sm={12} >
          <Item><DashboardBody /></Item>
          <Grid container spacing={1}>
            <Grid container item lg={8} md={8} sm={8} spacing={3}>
              <FormRow1 />
            </Grid>
            <Grid container item lg={4} md={4} sm={4} spacing={3}>
              <FormRow2 />
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Box>


    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12}>
    //       <Item><DashboardHeader /></Item>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Grid item xs={8}>
    //         <Item><PerformanceHighlights /></Item>
    //       </Grid>
    //       <Grid item xs={4}>
    //       <FormRow/>
    //         <Item><PaidClaimPMPMTrend /></Item> 
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Item><ClaimsVariance /></Item>
    //       </Grid>
    //     </Grid>

    //   </Grid>
    // </Box>
  );

}



