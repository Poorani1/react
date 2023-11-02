import "./jobstatustable.css";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';
import LinearProgressWithLabel from '../widget/LinearProgressWithLabel';
import { Col, Row } from "react-bootstrap";
import { parseJobsDate } from "../../../../../helper/util";
import { stage1RowSelected } from "../../../../../redux/actions/ImpackTrackingAction";
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  customTable: {
    "& .MuiTableCell-sizeSmall": {
      padding: "10px 10px 10px 10px"
    },
    "& .MuiTableContainer-root": {
      "box-shadow": "none",
    },

    "&.MuiTable-root .MuiTableRow-head": {
      "border-top": "1px solid black",
      "border-bottom": "1px solid black",
    },
  },
});

const progressStatus = (stageName, stageInfo) => {
  const { completion_pct, status } = stageInfo;
  const progressValue = completion_pct * 100;
  const completeStatus = status.toLowerCase() === 'complete';
  return (
    <Row className={completeStatus ? "completeStyle" : "inProgressStyle"}>
      <Col sm={3}>{stageName}</Col>
      <Col sm={8} style={{ marginLeft: 10 }}>
        <LinearProgressWithLabel completeStatus={completeStatus} value={progressValue} />
      </Col>
    </Row>);
}

const viewResultView = (jobType, rowStatus, stages, rowInfo, stage1RowSelect) => {
  const { stage1, stage2 } = stages;
  const linkStyle = { textDecoration: "none" };
  let linkURL = "/impacttracking/viewresults";
  if (jobType === 'InProgress') {
    if(stage1.status.toLowerCase() === 'complete') {
      linkStyle.color = 'blue';
    } else {
      linkStyle.color = '#c6c6c6';
      linkStyle.pointerEvents = 'none';
      linkStyle.cursor = "not-allowed";
      linkURL = '';
    }
  } else {
    if(stage2.status.toLowerCase() !== 'in progress' || rowStatus.toLowerCase() !== 'in progress') {
      linkStyle.color = 'blue';
    } else {
      linkStyle.color = '#c6c6c6';
      linkStyle.pointerEvents = 'none';
      linkStyle.cursor = "not-allowed";
      linkURL = '';
    }
  }

  return (
  <Link to={linkURL} style={linkStyle} onClick={() => stage1RowSelect(rowInfo)}>
    <div className="tableViewResults">
      View Results<KeyboardArrowRightIcon fontSize="small" style={{marginLeft: -4, marginBottom: 3}}/>
    </div>
  </Link>);
}

const Jobstatustable = ({ jobType = '', jobsInfo = [] }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const stage1RowSelect = (rowSelected) => {  
    dispatch(stage1RowSelected(rowSelected));
  }
  const tableRowView = jobsInfo.map((row, index) => (
    <>
      <TableRow key={"empty"} sx={{ fontSize: "11px", border: 'transparent' }}>
        <TableCell  style={{ padding: 5}} />
      </TableRow>
      <TableRow key={`${row.analysis_job_id}_${index}`} sx={{ fontSize: "11px", border: '1pt solid darkgray', borderBottom: '0px', }}>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Job Id</div>
          <div className="rowHeaderValueStyle">{row.analysis_job_id}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Program Name</div>
          <div className="rowHeaderValueStyle">{row.criteria.program_name}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">LOB</div>
          <div className="rowHeaderValueStyle">{row.criteria.lob}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Sub LOB</div>
          <div className="rowHeaderValueStyle">{row.criteria.sub_lob}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Region</div>
          <div className="rowHeaderValueStyle">{row.criteria.region}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Funding Type</div>
          <div className="rowHeaderValueStyle">{row.criteria.funding_type}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Case Id Period</div>
          <div className="rowHeaderValueStyle">{parseJobsDate(row.criteria.cohort_period_start)} - {parseJobsDate(row.criteria.cohort_period_end)}</div>
        </TableCell>
        <TableCell className="jobstatusCell">
          <div className="rowHeaderStyle">Follow Up Period</div>
          <div className="rowHeaderValueStyle">{row.criteria.follow_up_period} Months</div>
        </TableCell>
      </TableRow>
      <TableRow key={`${row.analysis_job_id}_${index}_sub`} sx={{ backgroundColor: "#F4F6F8", border: '1pt solid darkgray', borderTop: '0px', paddingTop: 15 }}>
        <TableCell style={{ color: row.status.toLowerCase() === 'success' ? '#5D9674' : row.status.toLowerCase() === 'failed' ? 'red' : '#815e90' }}
          className="jobstatusCell">
            <CircleIcon fontSize="4px" style={{marginTop: -3, marginRight: 3, fontSize: 12  }} />{row.status}
          </TableCell>
        <TableCell className="jobstatusStatus" colSpan={5}>
          <Row>
            <Col>{progressStatus("STAGE 1", row.stages.stage1)}</Col>
            <Col>{progressStatus("STAGE 2", row.stages.stage2)}</Col>
          </Row>
        </TableCell>
        <TableCell className="jobstatusStatus">{moment(row.created_time).format("MM/DD/YYYY HH:MM")}</TableCell>
        <TableCell className="jobstatusStatus">
          {viewResultView(jobType, row.status, row.stages, row, stage1RowSelect)}
        </TableCell>
      </TableRow>
    </>
  ));
  return (
    <div className="tableContent">
      <TableContainer component={Paper} className="table">
        <div className="tableContentInner">
          <Table sx={{ minWidth: 650 }} aria-label="simple table" classes={{ root: classes.customTable }} size="small" padding="none">
            <TableBody>
              {tableRowView}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
};

export default Jobstatustable;
