import requests from './requests';
import axios from 'axios';
import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import {Spinner, Row, Col} from 'react-bootstrap';

const baseURL = window.__RUNTIME_CONFIG__.REACT_APP_BASE_API_USER_MGNT_URL;

export function DoPostCall(serviceName, params = '', callBack) {
    const url = `${baseURL}${requests[serviceName]}`;
    let response = '', errorMsg = '';
    axios.post(url, params)
        .then((response) => {
            response = response.data;
            callBack(true, response, errorMsg);
        })
        .catch((error) => {
            errorMsg = error.message;
            callBack(false, response, errorMsg);
        });
}

export function DoGetCall(serviceName = '', params, updateURL = '', callBack) {
    let url = `${baseURL}${requests[serviceName]}`;
    if(updateURL !== '') {
      url = url.replace(updateURL.find, updateURL.replace);
    }
    let response = '', errorMsg = '';
    const getParams = { params };
    axios.get(url, getParams)
        .then((response) => {
            response = response.data;
            callBack(true, response, errorMsg);
        })
        .catch((error) => {
            errorMsg = error.message;
            callBack(false, response, errorMsg);
        });
}

export function multiGetRequest(urls = [], params = [], callBack) {
    const reqURL = urls.map((serviceName) => `${baseURL}${requests[serviceName]}`);
    const getReq = reqURL.map((url, index) => axios.get(url, {params: params[index]}));
    axios.all(getReq)
    .then(axios.spread((...responses) => {
        callBack(true, responses, []);
    }))
    .catch(errors => {
        callBack(false, [], errors);
    })
}

export function parseJobsDate(date = '') {
    const first2Str = String(date).slice(0, 2);
    const first2Num = Number(first2Str); 
    let month = -1, year = -1;
    if(first2Num > 12) {
        year = Number(String(date).slice(0, 4));
        month = Number(String(date).slice(4)) - 1;
    } else {
        month = Number(String(date).slice(0, 2)) - 1;
        year = Number(String(date).slice(2));
    }
    const dateObj = new Date(year, month, 1);  // 2009-11-10
    const monthName = dateObj.toLocaleString('default', { month: 'short' });
    return `${monthName} ${year}`;
}

const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  }

  export function exportAsCSV (fileName, jsonData) { 
    const { columns, data } = jsonData;    
    const jsonToCSV = [];
    jsonToCSV.push(columns.join(','));
    data.forEach((row) => {
        jsonToCSV.push(row.join(','));
    });  
    
    downloadFile({
      data: jsonToCSV.join('\n'),
      fileName: `${fileName}_${new Date().toLocaleString()}.csv`,
      fileType: 'text/csv',
    });
  }

  export function showLoading(showDialog = false) {
    return (<Dialog
        open={showDialog}
        PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              color: 'white',
            },
          }}
      >
        <DialogContent>
          <DialogContentText>
            <Row>
                <Col><Spinner animation="border" variant="light" /></Col>
                <Col className="loadingStyle">Loading...</Col>
            </Row>
          </DialogContentText>
        </DialogContent>
      </Dialog>);
  }
