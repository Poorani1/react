import React from 'react';
import { Grid, Paper, Slider, Tooltip, Typography } from '@mui/material';
import { Box, styled, textAlign } from '@mui/system';
import PropTypes from 'prop-types';
import './Performance-Highlights.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '10px',
  textAlign: 'center',
  color: 'black',
  border: 'none',
}));


const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  textAlign: 'center',

}));
const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  textAlign: 'center',

}));

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const GraphSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,

  },
}));

function PerformanceHighlights() {
  const [iem, setIem] = React.useState('');
  const handleChange1 = (event) => {
    console.log(event.target.value);
    setIem(event.target.value);
  };
  const [sa, setSA] = React.useState('');
  const handleChange2 = (event) => {
    console.log(event.target.value);
    setSA(event.target.value);
  };
  const [lob, setLOB] = React.useState('');
  const handleChange3 = (event) => {
    console.log(event.target.value);
    setLOB(event.target.value);
  };
  const [mbuclass, setMBUclass] = React.useState('');
  const handleChange4 = (event) => {
    console.log(event.target.value);
    setMBUclass(event.target.value);
  };
  const [product, setProduct] = React.useState('');
  const handleChange5 = (event) => {
    console.log(event.target.value);
    setProduct(event.target.value);
  };
  const [funding, setFunding] = React.useState('');
  const handleChange6 = (event) => {
    console.log(event.target.value);
    setFunding(event.target.value);
  };

  return (

    <Grid item lg={12} md={12} sm={12}>
      <Item style={{ height: '100%' }}>
        <Typography style={{textAlign:'left'}} >Performance Highlights</Typography>
        <Grid item lg={12} md={12} sm={12} >
          <Typography>
            <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
              <InputLabel id="IEM-label">Incured Ending Month</InputLabel>
              <Select
                labelId="IEM-label"
                id="IEM"
                value={iem}
                label="Incured Ending Month"
                onChange={handleChange1}
              >

                <MenuItem value="12017">Jan 2017</MenuItem>
                <MenuItem value={20}>Feb 2017</MenuItem>
                <MenuItem value={30}>Mar 2017</MenuItem>
                <MenuItem value={10}>Apr 2017</MenuItem>
                <MenuItem value={20}>May 2017</MenuItem>
                <MenuItem value={30}>Jun 2017</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 135 }} size="small">
              <InputLabel id="service-area-label">Service Area</InputLabel>
              <Select
                labelId="service-area-label"
                id="service-area"
                value={sa}
                label="Service Area"
                onChange={handleChange2}
              >

                <MenuItem value={10}>AR</MenuItem>
                <MenuItem value={20}>AZ</MenuItem>
                <MenuItem value={30}>CA</MenuItem>
                <MenuItem value={20}>CO</MenuItem>
                <MenuItem value={30}>CT</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="lob-label">LOB</InputLabel>
              <Select
                labelId="lob-label"
                id="lob"
                value={lob}
                label="lob"
                onChange={handleChange3}
              >

                <MenuItem value={10}>Commercial</MenuItem>
                <MenuItem value={20}>Medicaid</MenuItem>
                <MenuItem value={30}>Medicare</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="mbu-class-label">MBU Class</InputLabel>
              <Select
                labelId="mbu-class-label"
                id="mbu-class"
                value={mbuclass}
                label="mbu-class"
                onChange={handleChange4}
              >

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="product-label">Product</InputLabel>
              <Select
                labelId="product-label"
                id="product"
                value={product}
                label="product"
                onChange={handleChange5}
              >

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="funding-label">Funding</InputLabel>
              <Select
                labelId="funding-label"
                id="funding"
                value={funding}
                label="funding"
                onChange={handleChange6}
              >

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </Grid>
<br/>
        <Grid item lg={12} md={12} sm={12}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ m: 3 }} />

              <Slider
                valueLabelDisplay="on"
                defaultValue={60}
                disabled={true}
              />
              <Typography gutterBottom>Ending Membership</Typography>
              <div >
                <Grid container spacing={0}>

                  <Grid item xs={6}>
                    <span>$954.91</span>
                  </Grid>
                  <Grid item xs={6}>
                    $1,045.90
                  </Grid>
                  <Grid item xs={12}>

                    <span><ArrowDropUpIcon style={{ color: 'red' }} /></span>
                    <span>5.6%</span>
                    <br />
                    vs. target
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ m: 3 }} />

              <Slider
                valueLabelDisplay="on"
                defaultValue={100}
                disabled={true}
              />
              <Typography gutterBottom>Members Month</Typography>
              <div >
                <Grid container spacing={0}>

                  <Grid item xs={6}>
                    <span>$954.91</span>
                  </Grid>
                  <Grid item xs={6}>
                    $1,045.90
                  </Grid>
                  <Grid item xs={12}>

                    <span><ArrowDropUpIcon style={{ color: 'red' }} /></span>
                    <span>5.6%</span>
                    <br />
                    vs. target
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ m: 3 }} />

              <Slider

                valueLabelDisplay="on"

                defaultValue={2}
              />
              <Typography gutterBottom>Revenue PMPM</Typography>

              <div >
                <Grid container spacing={0}>

                  <Grid item xs={6}>
                    <span>$954.91</span>
                  </Grid>
                  <Grid item xs={6}>
                    $1,045.90
                  </Grid>
                  <Grid item xs={12}>

                    <span><ArrowDropUpIcon style={{ color: 'red' }} /></span>
                    <span>5.6%</span>
                    <br />
                    vs. target
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12}>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ m: 3 }} />

              <Slider
                valueLabelDisplay="on"
                defaultValue={10}
                disabled={true}
              />
              <Typography gutterBottom>Paid Claims PMPM</Typography>
              <div >
                <Grid container spacing={0}>

                  <Grid item xs={6}>
                    <span>$869.91</span>
                  </Grid>
                  <Grid item xs={6}>
                    $894.91
                  </Grid>
                  <Grid item xs={12}>

                    <span><ArrowDropUpIcon style={{ color: 'green' }} /></span>
                    <span>91.1%</span>
                    <br />
                    vs. target

                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ m: 3 }} />

              <Slider
                valueLabelDisplay="on"
                defaultValue={20}
                disabled={true}
              />
              <Typography gutterBottom>Members Month</Typography>
              <div >
                <Grid container spacing={0}>

                  <Grid item xs={6}>
                    <span>$954.91</span>
                  </Grid>
                  <Grid item xs={6}>
                    $1,045.90
                  </Grid>
                  <Grid item xs={12}>

                    <span><ArrowDropUpIcon style={{ color: 'red' }} /></span>
                    <span>5.6%</span>
                    <br />
                    vs. target
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={4}>
              <Box sx={{ m: 3 }} />

              <Slider
                valueLabelDisplay="on"
                defaultValue={60}
              />
              <Typography gutterBottom>Revenue PMPM</Typography>

              <div >
                <Grid container spacing={0}>

                  <Grid item xs={6}>
                    <span>$954.91</span>
                  </Grid>
                  <Grid item xs={6}>
                    $1,045.90
                  </Grid>
                  <Grid item xs={12}>

                    <span><ArrowDropUpIcon style={{ color: 'red' }} /></span>
                    <span>5.6%</span>
                    <br />
                    vs. target
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12}>
          <br />
          <Grid container spacing={0}>
            <Grid item lg={1} md={1} sm={1}><Box sx={{ width: 50 }}>
            <Slider
              valueLabelDisplay="auto"
              defaultValue={50}
              disabled={true}
            />

          </Box></Grid>
          <Grid item lg={10} md={10} sm={10}>
          <Typography style={{textAlign:'left'}}> Ranking vs. All Anthem Commercial Markets</Typography>
          </Grid>
</Grid>
        </Grid></Item>

    </Grid>
  );
}

export default PerformanceHighlights;