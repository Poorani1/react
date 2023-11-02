import "./populationbalancetable.css";
import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  customTable: {
    "& .MuiTableCell-sizeSmall": {
      padding: "0px 10px 0px 5px"
    },
  },
});

function ChildrenRowIII(props) {
  const { childrenRowIII } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
          {childrenRowIII.name}
        </TableCell>
        <TableCell align="left" ></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table aria-label="collapsible table" classes={{ root: classes.customTable }} size="small" padding="none">
              {childrenRowIII.variables.map((variablesRow, index) => (
                <TableRow key={index} className="tableclass">
                  <TableCell align="right" style={{ width: "12%" }}></TableCell>
                  <TableCell align="right">{variablesRow.measure_type}</TableCell>
                  <TableCell align="right">{variablesRow.control_mean}</TableCell>
                  <TableCell align="right">{variablesRow.study_mean}</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                  <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                  <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                  <TableCell align="right">{variablesRow.control_median}</TableCell>
                  <TableCell align="right">{variablesRow.study_median}</TableCell>
                  <TableCell align="right">{variablesRow.control_sd}</TableCell>
                  <TableCell align="right">{variablesRow.study_sd}</TableCell>
                </TableRow>
              ))}
              {childrenRowIII.children.map((childrenRowIV, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="left"  >{childrenRowIV.name}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


function ChildrenRowII(props) {
  const { childrenRowII } = props;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
          {childrenRowII.name}
        </TableCell>
        <TableCell align="left" ></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table aria-label="collapsible table" classes={{ root: classes.customTable }} size="small" padding="none">
              {childrenRowII.variables.map((variablesRow, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="right" style={{ width: "12%" }}></TableCell>
                  <TableCell align="right">{variablesRow.measure_type}</TableCell>
                  <TableCell align="right">{variablesRow.control_mean}</TableCell>
                  <TableCell align="right">{variablesRow.study_mean}</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                  <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                  <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                  <TableCell align="right">{variablesRow.control_median}</TableCell>
                  <TableCell align="right">{variablesRow.study_median}</TableCell>
                  <TableCell align="right">{variablesRow.control_sd}</TableCell>
                  <TableCell align="right">{variablesRow.study_sd}</TableCell>
                </TableRow>
              ))}
              {childrenRowII.children.map((childrenRowIII, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="left"  >{childrenRowIII.name}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>,
                <ChildrenRowIII key={childrenRowIII.name} childrenRowIII={childrenRowIII} />
              ))}
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



function ChildrenRow(props) {
  const { childrenRow } = props;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
          {childrenRow.name}
        </TableCell>
        <TableCell align="left" ></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table aria-label="collapsible table" classes={{ root: classes.customTable }} size="small" padding="none">
              {childrenRow.variables.map((variablesRow, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="right" style={{ width: "20px" }}></TableCell>
                  <TableCell align="right">{variablesRow.measure_type}</TableCell>
                  <TableCell align="right">{variablesRow.control_mean}</TableCell>
                  <TableCell align="right">{variablesRow.study_mean}</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                  <TableCell align="right">{variablesRow.adj_control_mean}</TableCell>
                  <TableCell align="right">{variablesRow.adj_study_mean}</TableCell>
                  <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                  <TableCell align="right">{variablesRow.control_median}</TableCell>
                  <TableCell align="right">{variablesRow.study_median}</TableCell>
                  <TableCell align="right">{variablesRow.control_sd}</TableCell>
                  <TableCell align="right">{variablesRow.study_sd}</TableCell>
                </TableRow>
              ))}
              {childrenRow.children.map((childrenRowII, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="left"  >{childrenRowII.name}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>,
                <ChildrenRowII key={childrenRowII.name} childrenRowII={childrenRowII} />
              ))}
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
          </IconButton>
          {row.name}
        </TableCell>
        <TableCell align="left" ></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12} className="tableclass1">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table aria-label="collapsible table" classes={{ root: classes.customTable }} size="small" padding="none">
              {row.variables.map((variablesRow, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="center">{variablesRow.display_name}</TableCell>
                  <TableCell align="right">{variablesRow.measure_type}</TableCell>
                  <TableCell align="center">{variablesRow.control_mean}</TableCell>
                  <TableCell align="center">{variablesRow.study_mean}</TableCell>
                  <TableCell align="center" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.smd}</TableCell>
                  <TableCell align="center">{variablesRow.adj_control_mean}</TableCell>
                  <TableCell align="center">{variablesRow.adj_study_mean}</TableCell>
                  <TableCell align="center" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>{variablesRow.adj_smd}</TableCell>
                  <TableCell align="center">{variablesRow.control_median}</TableCell>
                  <TableCell align="center">{variablesRow.study_median}</TableCell>
                  <TableCell align="center" >{variablesRow.control_sd}</TableCell>
                  <TableCell align="center" >{variablesRow.study_sd}</TableCell>
                </TableRow>
              ))}
              {row.children.map((childrenRow, index) => (
                <TableRow key={index} className="tableclass" >
                  <TableCell align="left" >{childrenRow.name}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>,
                <ChildrenRow key={childrenRow.name} childrenRow={childrenRow} />
              ))}
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default function CollapsibleTable() {

  const classes = useStyles();
  const rows = useSelector((state) => state.impactReducer.populationBalanaceTableData);

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
      <Table stickyHeader aria-label="sticky table" classes={{ root: classes.customTable }} size="small" padding="none">
        <TableHead>
          <TableRow   >
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}></TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}></TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }} colSpan="3">Baseline Unadjusted</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }} colSpan="3">Baseline Adjusted (Matched)</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }} colSpan="2">Median</TableCell>
            <TableCell align="center" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }} colSpan="2">Std Dev</TableCell>
          </TableRow>
          <TableRow >
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Category</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Type</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Study</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Std Diff</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Study</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Std Diff</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Study</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Control</TableCell>
            <TableCell align="right" sx={{ backgroundColor: "#ece8ff", border: "2px solid white" }}>Study</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}