import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Overview, { url } from "./Overview/Overview";
import { Button } from "@mui/material";
import "./ExecutiveDashboardHeader.css";
import Moment from "react-moment";
import axios from "axios";
const drawerWidth = 150;

const StyledTabs = styled(Tabs)({
  borderColor: "divider",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  "& .MuiButtonBase-root-MuiTab-root": {
    justifyContent: "start",
  },
});
const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  minHeight: "32px",
  minWidth: 0,
  fontFamily: "ElevanceSansMedium,Arial, Helvetica, sans-serif !important",
  color: "white",
  "&:hover": {
    background: "#1a3673",
    opacity: 1,
  },
  "&.Mui-selected": {
    justifyContent: "start",
    font: "ElevanceSansMedium,Arial, Helvetica, sans-serif !important",
    fontFamily: "ElevanceSansMedium,Arial, Helvetica, sans-serif !important",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
  "& .MuiTab-root": {
    justifyContent: "start",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} style={{ padding: "5px" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ExecutiveHeader() {
  const [open, setOpen] = React.useState(true);
  const [sideBarOpen, setSideBarOpen] = React.useState(true);
  const [incurredThru, setIncurredThru] = React.useState(null);
  const [incurredFrom, setIncurredFrom] = React.useState(null);
  const handleClick = () => {
    setOpen(!open);
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMobileMenu = () => {
    setSideBarOpen((open) => !open);
  };
  React.useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 991.98) {
      setSideBarOpen(false);
    }
    // get Incurred thru and from date
    axios.get(`${url}/snapYear`).then((res) => {
      if (res.status === 200) {
        setIncurredThru(res.data.data.INCURRED_THRU);
        setIncurredFrom(res.data.data.INCURRED_FROM);
      }
    });
  }, []);
  return (
    <div
      className="parent"
      style={{ display: "flex", width: "100%", border: "1px solid white" }}
    >
      <Button id="mobileMenuIcon" onClick={handleMobileMenu}>
        <MenuIcon />
      </Button>
      {sideBarOpen && (
        <div
          className="mobileview"
          style={{ display: "flex", width: drawerWidth, padding: "0px" }}
        >
          <Box sx={{ display: "flex" }}>
            <Drawer
              sx={{
                bgcolor: "#1a3673",
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  position: "static",
                },
              }}
              variant="permanent"
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "#1a3673",
                  height: "100%",
                  color: "white",
                }}
                component="nav"              
              >
                <ListItemButton sx={{ bgcolor: "" }} onClick={handleClick}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontFamily:
                        "ElevanceSansMedium,Arial, Helvetica, sans-serif",
                    }}
                    primary="Executive Dashboard"
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <StyledTabs
                    orientation="vertical"
                    value={value}
                    textColor="inherit"
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                      borderRight: 1,
                      borderColor: "divider",
                      bgcolor: "",
                      color: "white",
                    }}
                  >
                    <StyledTab
                      style={{
                        alignItems: "flex-start",
                        fontSize: "12px",
                        textAlign: "left",
                        padding: "10px",
                      }}
                      label="Overview"
                      {...a11yProps(0)}
                    />
                    {/* Future Tabs to be added */}
                    {/* <StyledTab
                    style={{
                      alignItems: "flex-start",
                      fontSize: "12px",
                      textAlign: "left",
                      padding: "10px",
                    }}
                    label="Claims by Site of care"
                    {...a11yProps(1)}
                    disabled
                  />
                  <StyledTab
                    style={{
                      alignItems: "flex-start",
                      fontSize: "12px",
                      textAlign: "left",
                      padding: "10px",
                    }}
                    label="Claims by Speciality"
                    {...a11yProps(2)}
                    disabled
                  />
                  <StyledTab
                    style={{
                      alignItems: "flex-start",
                      fontSize: "12px",
                      textAlign: "left",
                      padding: "10px",
                    }}
                    label="Claims by Group"
                    {...a11yProps(3)}
                    disabled
                  /> */}
                    {/* <StyledTab label="Claims by Provider" {...a11yProps(4)} />
        <StyledTab label="High-Cost Claimants" {...a11yProps(5)} />
        <StyledTab label="Membership Details" {...a11yProps(6)} /> */}
                  </StyledTabs>
                </Collapse>
             <span className="paidthru">
                  {incurredThru ? (
                    <>
                    <Moment format="MMM YYYY" parse="YYYYMM">
                        {incurredThru}
                      </Moment>
                      Paid Thru                      
                    </>
                  ) : null}
                </span>
                <span className="incurredfrom">
                  {incurredFrom ? (
                    <>
                    <Moment format="MMM YYYY" parse="YYYYMM">
                      {incurredFrom}
                      </Moment>
                      Incurred from                      
                    </>
                  ) : null}
                </span>
                <span className="snapYear">
                  {incurredThru ? (
                    <>
                    <Moment format="MMM YYYY" parse="YYYYMM">
                        {incurredThru}
                      </Moment>
                      Incurred Thru
                    </>
                  ) : null}
                </span>
                <span className="mprisy">                 
                MPR Ind is Y
                </span>
              </List>
            </Drawer>
          </Box>
        </div>
      )}
      <div style={{ width: "100%", minHeight: "calc(100vh - 115px)" }}>
        <TabPanel value={value} index={0}>
          <Overview />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Claims by Site of care
        </TabPanel>
        <TabPanel value={value} index={2}>
          Claims by Speciality
        </TabPanel>
        <TabPanel value={value} index={3}>
          Claims by Group
        </TabPanel>
        <TabPanel value={value} index={4}>
          Claims by Provider
        </TabPanel>
        <TabPanel value={value} index={5}>
          High-Cost Claimants
        </TabPanel>
        <TabPanel value={value} index={6}>
          Membership Details
        </TabPanel>
      </div>
    </div>
  );
}
