import React, { useEffect, useState } from 'react';
import { lobActions, lobListActions, lobMbuclassActions, productActions, productListActions } from '../../../../redux/actions/ExecutiveDashboardAction';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, ListItemText, Menu, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Box, styled } from '@mui/system';
import BarChart from './graphs/barchart';
import axios from 'axios';
import HccChart1 from './graphs/hccchart1';
import HccChart2 from './graphs/hccChart2';
import HccChart3 from './graphs/hccChart3';
import './Overview.css';
import Rank from './rank';
import Spinner from './spinner';
import TargetLabel from './targetlabel';
import PriorLabel from './priorlabel';
import Moment from 'react-moment';
import LineChartTrends from './graphs/linegraph';
import { MenuProps, useStyles, MenuProps1 } from "./utils";
import Lob from "./dropDowns/lob";
import Servicearea from './dropDowns/Servicearea';
import Product from './dropDowns/product';
import Funding from './dropDowns/funding';
import TrendBarChart from './graphs/trendBarChart';


const cancelledError = "CanceledError"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '10px',
  textAlign: 'left',
  color: '#1a3673',
  fontSize: '0.875rem',
}));

export const url = window.__RUNTIME_CONFIG__.REACT_APP_BASE_API_URL;
//export const url= "http://localhost:8080/cocwp/api";
export default function Overview() {
  const [laodingMaster, setLoadingMaster] = React.useState(true);
  const [loadingfundingTypeClassMap, setLoadingfundingTypeClassMap] = React.useState(false);
  const [type, setType] = React.useState('targetVsActual');
  const [time, setTime] = React.useState('m');
  const [iem, setIem] = React.useState('');
  const [sa, setSA] = React.useState([]);
  const [serviceAreaList, setServiceAreaList] = React.useState([]);
  // const [lob, setLOB] = React.useState('Commercial');
  // const [lobList, setLOBList] = React.useState([]);
  // const [mbuclass, setMBUclass] = React.useState(['Commercial']);
  const [fundingType, setFundingType] = React.useState(['All']);
  const [fundingClass, setFundingClass] = React.useState(['All']);
  const [amountType, setAmountType] = React.useState('Paid');
  // const [product, setProduct] = React.useState(['All']);
  // const [productList, setProductList] = React.useState([]);
  const [iemList, setIemList] = React.useState([]);
  const [ibnr, setIbnr] = React.useState('Y');
  const [paidClaimsY1, setPaidClaimsY1] = React.useState([]);
  const [claimVarianceType, setClaimVarianceType] = React.useState('inpatient');
  const [paidClaimsData, setPaidClaimsData] = React.useState({});
  const [fundingParent, setFundingParent] = React.useState([]);
  const [budget, setBudget] = React.useState('All');
  const [budgetList, setBudgetList] = React.useState([]);
  const [performanceApiLoading, setPerformanceApiLoading] = React.useState(true);
  const [trendApiLoading, setTrendApiLoading] = React.useState(true);
  const [mlrtrendApiLoading, setMlrTrendApiLoading] = React.useState(true);
  const [varianceApiLoading, setVarianceApiLoading] = React.useState(true);
  const controller = new AbortController();
  const apiConfig = { signal: controller.signal };
  const [clear, setClear] = React.useState('');
  const dispatch = useDispatch();
  const lob = useSelector((state) => state.executiveDashboardReducer.lob);
  const lobList = useSelector((state) => state.executiveDashboardReducer.lobList);
  const mbuclass = useSelector((state) => state.executiveDashboardReducer.mbuclass);
  const product = useSelector((state) => state.executiveDashboardReducer.product);
  const productList = useSelector((state) => state.executiveDashboardReducer.productList);

  useEffect(() => {
    console.log('lob>>>',lob)
  },[lob])

  

const setLOB = (lobValue) => {
  dispatch(
    lobActions(lobValue)
  );
};
useEffect(() => {
  console.log('loblist>>>',lobList)
},[lobList])

const setLOBList = (lobListValue) => {
  console.log('loblistvalue>>>',lobListValue)
  dispatch(
    lobListActions(lobListValue)
  );
};
useEffect(() => {
  console.log('mbuclass>>>',mbuclass)
},[mbuclass])


const setMBUclass = (mbuclassValue) => {
  dispatch(
    lobMbuclassActions(mbuclassValue)
  );
};

useEffect(() => {
  console.log('product>>>',product)
},[product])

const setProduct = (productValue) => {
dispatch(
  productActions(productValue)
);
};
useEffect(() => {
console.log('productlist>>>',productList)
},[productList])

const setProductList = (productListValue) => {
console.log('productlistvalue>>>',productListValue)
dispatch(
  productListActions(productListValue)
);
};

  const handleType = (event, newType) => {
    setType(newType);
    setBudget('All');
  };

  const handleClaimVarianceType = (event, newType) => {
    setClaimVarianceType(newType);
  };
  const handleTime = (event, newTime) => {
    if (newTime !== null) {
      setTime(newTime);
    }
  };
  const handleIem = (event) => {
    setIem(event.target.value);
  };

  const handleAmountType = (event) => {
    setAmountType(event.target.value);
  };

  const handleIbnr = (event) => {
    setIbnr(event.target.value);
  };

  const handleBudget = (event) => {
    setBudget(event.target.value);
  };
  const [hccGraph1, setHccGraph1] = React.useState([]);
  const [hccGraph2, setHccGraph2] = React.useState([]);
  const [hccGraph3, setHccGraph3] = React.useState([]);
  const [mlrTrendData, setmlrTrendData] = React.useState({});
  const [membershipSegmentData, setMembershipSegmentData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [allowedPmPm, setAllowedPmPm] = React.useState(null);
  const [revenuePmPm, setRevenuePmPm] = React.useState(null);
  const [paidClaims, setPaidClaims] = React.useState([]);
  const [memberMonths, setMemberMonths] = React.useState([]);
  const [endingMembership, setEndingMembership] = React.useState(null);
  const [mlr, setMlr] = React.useState(null);

  useEffect(() => {
    setLoadingMaster(true);
    loadLobList();
    loadIemList();
    loadBudgetList();
    setLoadingMaster(false);
  }, []);

  useEffect(() => {
    setTrendApiLoading(true);
    if (iem !== '' && lob !== '') {
      paidClaimTrends({
        "type": claimVarianceType,
        "product": product == 'All' ? [] : product,
        "lob": lob,
        "incurredMonth": iem,
        "mbuclass": getMbuClass(),
        "fundingclass": type == 'targetVsActual' ? '' : fundingClass == 'All' ? '' : fundingClass,
        "fundingtype": type == 'targetVsActual' ? [] : fundingType == 'All' ? [] : fundingType,
        "serviceArea": getSA(),
        "duration": time,
        "viewType": type,
        "amountType": amountType,
        "ibnr": ibnr,
        "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
      });
    }
    return () => { controller.abort() }
  }, [ibnr, claimVarianceType]);

  useEffect(() => {
    setTrendApiLoading(true);
    setVarianceApiLoading(true);
    if (iem !== '' && lob !== '') {
      paidClaimTrends({
        "type": claimVarianceType,
        "product": product == 'All' ? [] : product,
        "lob": lob,
        "incurredMonth": iem,
        "mbuclass": getMbuClass(),
        "fundingclass": type == 'targetVsActual' ? '' : fundingClass == 'All' ? '' : fundingClass,
        "fundingtype": type == 'targetVsActual' ? [] : fundingType == 'All' ? [] : fundingType,
        "serviceArea": getSA(),
        "duration": time,
        "viewType": type,
        "amountType": amountType,
        "ibnr": ibnr,
        "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
      });
      claimVariance(claimVarianceType);
    }
    return () => { controller.abort() }
  }, [amountType]);

  useEffect(() => {
    if (lob !== '') {
      setSA(['All']);
      setProduct(['All']);
      loadServiceAreaList(lob, getMbuClass());
      if (sa !== '') {
        if (!loadingfundingTypeClassMap) {
          loadFundingTypeClassList(lob, getSA(), getMbuClass());
        }
      }
    }
  }, [lob]);

  useEffect(() => {
    if (lob !== '') {
      setProduct(['All']);
      if (!loadingfundingTypeClassMap) {
        loadFundingTypeClassList(lob, getSA(), getMbuClass());
      }
    }
  }, [sa]);

  useEffect(() => {
    if (lob !== '') {
      setProduct(['All']);
      loadProductList(lob, getSA(), getMbuClass());
    }
  }, [mbuclass]);

  useEffect(() => {console.log('enter>>>')
    if (!laodingMaster) {console.log('enter1>>>')
      setPerformanceApiLoading(true);
      setTrendApiLoading(true);
      setVarianceApiLoading(true);
      setMlrTrendApiLoading(true);
      if (iem !== "" && lob !== "") {console.log('enter2>>>')
        let data = {
          "serviceArea": getSA(),
          "product": product == 'All' ? [] : product,
          "lob": lob,
          "incurredMonth": iem,
          "mbuclass": getMbuClass(),
          "fundingclass": type == 'targetVsActual' || lob != "Commercial" ? '' : fundingClass == 'All' ? '' : fundingClass,
          "fundingtype": type == 'targetVsActual' || lob != "Commercial" ? [] : fundingType == 'All' ? [] : fundingType,
          "duration": time,
          "viewType": type,
          "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
        }
        functionchart(data);

        paidClaimTrends({
          "type": claimVarianceType,
          "serviceArea": getSA(),
          "product": product == 'All' ? [] : product,
          "lob": lob,
          "incurredMonth": iem,
          "mbuclass": getMbuClass(),
          "fundingclass": type == 'targetVsActual' || lob != "Commercial" ? '' : fundingClass == 'All' ? '' : fundingClass,
          "fundingtype": type == 'targetVsActual' || lob != "Commercial" ? [] : fundingType == 'All' ? [] : fundingType,
          "duration": time,
          "viewType": type,
          "amountType": amountType,
          "ibnr": ibnr,
          "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
        });

        claimVariance(claimVarianceType);

        mlrTrends({
          "serviceArea": getSA(),
          "product": product == 'All' ? [] : product,
          "lob": lob,
          "incurredMonth": iem,
          "mbuclass": getMbuClass(),
          "fundingclass": type == 'targetVsActual' || lob != "Commercial" ? '' : fundingClass == 'All' ? '' : fundingClass,
          "fundingtype": type == 'targetVsActual' || lob != "Commercial" ? [] : fundingType == 'All' ? [] : fundingType,
          "duration": time,
          "viewType": type,
          "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
        });

        membershipsegment({
          "serviceArea": getSA(),
          "product": product == 'All' ? [] : product,
          "lob": lob,
          "incurredMonth": iem,
          "mbuclass": getMbuClass(),
          "fundingclass": type == 'targetVsActual' || lob != "Commercial" ? '' : fundingClass == 'All' ? '' : fundingClass,
          "fundingtype": type == 'targetVsActual' || lob != "Commercial" ? [] : fundingType == 'All' ? [] : fundingType,
          "duration": time,
          "viewType": type,
          "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
        });
      }
    }
    return () => { controller.abort() }
  }, [laodingMaster, type, time, iem, lob, sa, mbuclass, fundingType, fundingClass, product, budget]);
  const apiTrigger = (recivedSA, recievedProduct, recievedlob, recievedmbuClass) => {
  };
  useEffect(() => {
    setVarianceApiLoading(true);
    if (iem !== "" && lob !== "") {
      claimVariance(claimVarianceType);
    }
    return () => { controller.abort() }
  }, [claimVarianceType]);

  const functionchart = async (data) => {
    axios.post(url + `/dashboard/overview/performanceHighlights`, data, apiConfig)
      .then(async (response) => {
        setLoading(false);
        setAllowedPmPm(response?.data?.data?.allowedPmPm);
        setRevenuePmPm(response?.data?.data?.revenuePmPm);
        setPaidClaims(response.data.data.paidClaims);
        setMemberMonths(response.data.data.memberMonths);
        setEndingMembership(response.data.data['endingMembership']);
        setMlr(response.data.data.mlr);
        setPerformanceApiLoading(false);
      })
      .catch(function (error) {
        if (error.name !== cancelledError) {
          setAllowedPmPm('error');
          setRevenuePmPm('error');
        setPaidClaims('error');
        setMemberMonths('error');
        setEndingMembership('error');
        setMlr('error');
        setPerformanceApiLoading(false);
        }
        
      });
  }
  const paidClaimTrends = async (data) => {
    axios.post(url + `/dashboard/overview/paidClaimTrend`, data, apiConfig)
      .then(async (response) => {
        response.data =  {"data":{"xvalue":[202109,202110,202111,202112,202201],"y1Value":[121,112,110,109,103],"y2Value":[102,100,104,108,93],"y3Value":[102,100,104,108,93]},"UUID":"","status":200,"error":null}
        setPaidClaimsData(response.data.data);
        setPaidClaimsY1(response.data.data.y1Value);
        setTrendApiLoading(false);
      })
      .catch(function (error) {
        if (error.name !== cancelledError) {
          setPaidClaimsY1('error');
          setTrendApiLoading(false);
        }        
      });
  }
  const mlrTrends = async (data) => {debugger
    axios.post(url + `/dashboard/overview/mlrTread`, data, apiConfig)
      .then(async (response) => {debugger
        setmlrTrendData(response.data.data);
        setMlrTrendApiLoading(false);
      })
      .catch(function (error) {
        if (error.name !== cancelledError) {
          setmlrTrendData('error');
          setMlrTrendApiLoading(false);
        }        
      });
  }
  const membershipsegment = async (data) => {debugger
    axios.post(url + `/dashboard/overview/endingMemberSegment`, data, apiConfig)
      .then(async (response) => {
        response.data =  {"data":{"xvalue":[202109,202110,202111,202112,202201],"y1Value":[121,112,110,109,103],"y2Value":[102,100,104,108,93],"y3Value":[102,100,104,108,93]},"UUID":"","status":200,"error":null}
        setMembershipSegmentData(response.data.data);
        setMlrTrendApiLoading(false);
      })
      .catch(function (error) {
        if (error.name !== cancelledError) {
          setMembershipSegmentData('error');
          setMlrTrendApiLoading(false);
        }        
      });
  }
  function getMbuClass() {
    if (mbuclass.length === 1 && mbuclass[0] === 'All') {
      return [];
    }
    return mbuclass;
  }
  function getSA() {
    if (sa.length === 1 && sa[0] === 'All') {
      return [];
    }
    return sa;
  }
  function getSANew(recievedSA) {
    if (recievedSA.length === 1 && recievedSA[0] === 'All') {
      return [];
    }
    return recievedSA;
  }
  function HandleError() {

  }
  const claimVariance = async (claimtype, tmpAmountType) => {
    let data = {
      "type": claimtype,
      "serviceArea": getSA(),
      "product": product == 'All' ? [] : product,
      "lob": lob,
      "incurredMonth": iem,
      "mbuclass": getMbuClass(),
      "fundingclass": type == 'targetVsActual' || lob != "Commercial" ? '' : fundingClass == 'All' ? '' : fundingClass,
      "fundingtype": type == 'targetVsActual' || lob != "Commercial" ? [] : fundingType == 'All' ? [] : fundingType,
      "duration": time,
      "viewType": type,
      "amountType": tmpAmountType ? tmpAmountType : amountType,
      "segment": "",
      "budgets": type == 'priorVsCurrent' ? [] : budget == 'All' ? [] : [budget]
    }
    axios.post(url + `/dashboard/overview/claimVariance`, data, apiConfig)
      .then(async (response) => {
        setHccGraph1(response.data.data.graph1);
        setHccGraph2(response.data.data.graph2);
        setHccGraph3(response.data.data.graph3);
        setVarianceApiLoading(false);
      })
      .catch(function (error) {
        if (error.name !== cancelledError) {
          setHccGraph1('error');
          setVarianceApiLoading(false);
        }
        
        HandleError();
      });
  }

  const loadLobList = async (data) => {
    axios.get(url + `/lob`)
      .then(async (response) => {
        if (response.data.status === 200) {
          response.data = {"data":[{"topParent":"Commercial","level":0,"children":[{"topParent":"Commercial","level":1,"children":[{"topParent":"Commercial","level":2,"children":[],"label":"Commercial Ind Blue","value":"Commercial~Commercial Individual~Commercial Ind Blue"}],"label":"Commercial Individual","value":"Commercial~Commercial Individual"},{"topParent":"Commercial","level":1,"children":[{"topParent":"Commercial","level":2,"children":[],"label":"Large Group","value":"Commercial~Local Group~Large Group"},{"topParent":"Commercial","level":2,"children":[],"label":"Small Group","value":"Commercial~Local Group~Small Group"}],"label":"Local Group","value":"Commercial~Local Group"},{"topParent":"Commercial","level":1,"children":[{"topParent":"Commercial","level":2,"children":[],"label":"National","value":"Commercial~National~National"}],"label":"National","value":"Commercial~National"}],"label":"Commercial","value":"Commercial"},{"topParent":"Medicaid","level":0,"children":[{"topParent":"Medicaid","level":1,"children":[],"label":"MCD Non Partnership","value":"Medicaid~MCD Non Partnership"},{"topParent":"Medicaid","level":1,"children":[],"label":"MCD Partnership","value":"Medicaid~MCD Partnership"}],"label":"Medicaid","value":"Medicaid"},{"topParent":"Medicare","level":0,"children":[{"topParent":"Medicare","level":1,"children":[],"label":"GRS","value":"Medicare~GRS"},{"topParent":"Medicare","level":1,"children":[],"label":"Ind Med CareMore","value":"Medicare~Ind Med CareMore"},{"topParent":"Medicare","level":1,"children":[],"label":"Ind Med Non CareMore","value":"Medicare~Ind Med Non CareMore"}],"label":"Medicare","value":"Medicare"}],"error":null,"status":200}
          let data = response.data.data;
          for (let lobItem of data) {
            if (lobItem.label === 'Commercial') {
              lobItem.checked = true;
            }
          }
          console.log('lobdata>>>', data)
          setLOBList(data);

        }
      })
      .catch(function (error) {
        HandleError();
      });
  }
  const loadProductList = async (tmplob, tmpsa, tmpmbu) => {
    let data = {
      "lob": tmplob,
      "serviceArea": tmpsa,
      "mbuClass": tmpmbu
    }
    axios.post(url + `/product`, data)
      .then(async (response) => {
        if (response.data.status === 200) {

          response.data =  {"data":[{"level":0,"children":[],"label":"All","value":"All"},{"level":0,"children":[],"label":"Commercial Behavioral Health","value":"Commercial Behavioral Health"},{"level":0,"children":[],"label":"Commercial Unknown","value":"Commercial Unknown"},{"level":0,"children":[],"label":"FFS","value":"FFS"},{"level":0,"children":[],"label":"Flex Spending Account","value":"Flex Spending Account"},{"level":0,"children":[],"label":"HMO","value":"HMO"},{"level":0,"children":[],"label":"POS","value":"POS"},{"level":0,"children":[],"label":"PPO/EPO","value":"PPO/EPO"}],"error":null,"status":200}
          let data = response.data.data;
          let allItem = data.find(x => x.label == 'All')
          if (allItem) {
            allItem.isDefaultValue = true
          }
          setProductList(data);
        }
      })
      .catch(function (error) {
        HandleError();
      });
  }
  const loadIemList = async (data) => {
    axios.get(url + `/incurredMonth`)
      .then(async (response) => {
        if (response.data.status === 200) {
          response.data = {"data":[202208,202207,202206,202205,202204,202203,202202,202201,202112,202111,202110,202109,202108,202107,202106,202105,202104,202103,202102,202101,202012,202011,202010,202009,202008,202007,202006,202005,202004,202003,202002,202001,201912,201911,201910,201909,201908,201907,201906,201905,201904,201903,201902,201901,201812,201811,201810,201809,201808,201807,201806,201805,201804,201803,201802,201801,201712,201711,201710,201709,201708,201707,201706],"error":null,"status":200}
          let data = response.data.data;
          setIemList(data);
          if (data.length > 0) {
            setIem(data[0]);
          }
        }
      })
      .catch(function (error) {
        HandleError();
      });
  }

  const loadBudgetList = async (data) => {
    axios.get(url + `/budgets`)
      .then(async (response) => {
        if (response.data.status === 200) {
          let data = response.data.data;
          setBudgetList(data);
        }
      })
      .catch(function (error) {
        HandleError();
      });
  }

  const loadServiceAreaList = async (tmplob, tmpmbu) => {
    let data = {
      "lob": tmplob,
      "mbuClass": tmpmbu
    }
    axios.post(url + '/serviceArea', data)
      .then(async (response) => {
        if (response.data.status === 200) {
          response.data = {"data":[{"children":[],"label":"All","value":"All"},{"children":[],"label":"CA","value":"CA"},{"children":[],"label":"CO","value":"CO"},{"children":[],"label":"CT","value":"CT"},{"children":[],"label":"GA","value":"GA"},{"children":[],"label":"IN","value":"IN"},{"children":[],"label":"KY","value":"KY"},{"children":[],"label":"ME","value":"ME"},{"children":[],"label":"MO","value":"MO"},{"children":[],"label":"NH","value":"NH"},{"children":[],"label":"NV","value":"NV"},{"children":[],"label":"NY","value":"NY"},{"children":[],"label":"OH","value":"OH"},{"children":[],"label":"VA","value":"VA"},{"children":[],"label":"WI","value":"WI"},{"children":[],"label":"Not Mapped","value":"Not Mapped"}],"error":null,"status":200}
          let data = response.data.data;
          let allItem = data.find(x => x.label == 'All')
          if (allItem) {
            allItem.isDefaultValue = true
          }
          setServiceAreaList(data);
        }
      })
      .catch(function (error) {
        HandleError();
      });
  }

  const loadFundingTypeClassList = async (tmpLob, tmpSa, tmpmbu) => {
    let data = {
      "lob": tmpLob,
      "mbuClass": tmpmbu,
      "serviceArea": tmpSa,
    }
    setLoadingfundingTypeClassMap(true);
    axios.post(url + '/fundingTypeClass', data)
      .then(async (response) => {
        if (response.data.status === 200) {
          response.data = {"data":[{"level":0,"children":[],"label":"All","value":"All"},{"level":0,"children":[{"level":1,"children":[],"label":"Multi Employer Welfare Assoc Insured","value":"Fully Insured~Multi Employer Welfare Assoc Insured"},{"level":1,"children":[],"label":"Non-Refunding","value":"Fully Insured~Non-Refunding"}],"label":"Fully Insured","value":"Fully Insured"}],"error":null,"status":200}
          setFundingParent(response.data.data);
          setLoadingfundingTypeClassMap(false);
        }
      })
      .catch(function (error) {
        setLoadingfundingTypeClassMap(false);
        HandleError();
      });
  }

  return (
    <div className=" justify-content-center flex-column flex-lg-row justify-content-lg-between " >
      <div>
        <span style={{ fontSize: '25px', padding: '5px' }}>Overview</span>
      </div>
      <Divider />
      <div >
        <div >
          <div className="overviewFilter">
            <Lob dataArray={lobList} setLOB={setLOB} setMBUclass={setMBUclass} apiTrigger={apiTrigger} setSA={setSA} setProduct={setProduct} mbuclass={mbuclass} setClear={setClear} />
            <Servicearea dataArray={serviceAreaList} setSA={setSA} lob={lob} setProduct={setProduct} apiTrigger={apiTrigger} mbuClass={mbuclass} product={product} sa={sa} clear={clear} />
            <Product dataArray={productList} setProduct={setProduct} lob={lob} apiTrigger={apiTrigger} mbuClass={mbuclass} sa={sa} product={product} />
            <Funding disabled={type == "targetVsActual" || lob != "Commercial"} dataArray={fundingParent} setFundingType={setFundingType} setFundingClass={setFundingClass} lob={lob} apiTrigger={apiTrigger} mbuClass={mbuclass} sa={sa} product={product} />
          </div>
          <div className="overviewFilterRadio">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }} size="small">
              <InputLabel id="amountType-label"><span className="fontDisplay">Amount Type</span></InputLabel>
              <Select
                id="amountType"
                value={amountType}
                label="amount Type"
                style={{ fontSize: '12px' }}
                onChange={handleAmountType}
              >
                <MenuItem value={"Allowed"}>Allowed</MenuItem>
                <MenuItem value={"Paid"}>Paid</MenuItem>
              </Select>
            </FormControl>
            <div style={{ display: 'flex' }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }} size="small">
                <InputLabel id="IEM-label"><span className="fontDisplay">Incurred Ending Month</span></InputLabel>
                <Select
                  labelId="IEM-label"
                  id="IEM"
                  value={iem}
                  style={{ fontSize: '12px' }}
                  label="Incurred Ending Month"
                  onChange={handleIem}
                  MenuProps={MenuProps1}>

                  {iemList.map(function (ele, index) {
                    return <MenuItem value={ele}>
                      <Moment format="MMM YYYY" parse="YYYYMM">
                        {ele}
                      </Moment></MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }} size="small">
                <InputLabel id="budget-label"><span className="fontDisplay">Budget Scenario</span></InputLabel>
                <Select
                  labelId="budget-label"
                  id="budget"
                  value={budget}
                  label="budget"
                  onChange={handleBudget}
                  MenuProps={MenuProps1}
                  disabled={type == "priorVsCurrent"}
                  style={{ fontSize: '12px' }}
                >
                  <MenuItem value={"All"}>{"All"}</MenuItem>
                  {budgetList.map(function (ele) {
                    return <MenuItem value={ele}>{ele}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="targetRadiogroup" >
              <FormControl>
                <RadioGroup row
                  name="radio-buttons"
                  value={type}
                  onChange={handleType}
                >
                  <FormControlLabel className="find" value="targetVsActual" control={<Radio className="targetRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Target vs. Actual</span>} />
                  <FormControlLabel value="priorVsCurrent" control={<Radio className="targetRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Prior vs. Current</span>} />

                </RadioGroup>
              </FormControl>
            </div>
            <br />
            <div className="togglegroup" >
              <ToggleButtonGroup
                value={time}
                color="primary"
                exclusive
                onChange={handleTime}
                size="small"
                style={{ height: 30 }}
              >
                <ToggleButton value="m" >
                  M
                </ToggleButton>
                <ToggleButton value="3m" >
                  3M
                </ToggleButton>
                <ToggleButton value="6m" >
                  6M
                </ToggleButton>
                <ToggleButton value="ytd" >
                  YTD
                </ToggleButton>
                <ToggleButton value="1y"  >
                  1Y
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
        <div >
          <Box className="parentBox" >
            <Box className="perfomanceBox">
              <div style={{ width: '100%', padding: '10px', paddingBottom:'5px', paddingTop:'5px' }}>
                <span style={{ fontWeight: '500' }}>Performance Highlights (Incl. IBNR)</span>
                {/* {!loaded && <Spinner>Loading</Spinner>} */}
                <Grid item lg={12} md={12} sm={12} >
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={4}>
                      {endingMembership == 'error' ? <span style={{ color: 'red' }}><br />Error loading data</span> :
                        <Item style={{ padding: '0px' }}>
                          <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', width: '70%', padding: '10px' }}>
                              <span>Ending Membership</span>
                            </div>
                            <div style={{ textalign: 'right', width: '30%' }}>
                              <Rank value={endingMembership?.rankPercentile} ending={serviceAreaList.length - 1} />
                            </div>
                          </div>
                          {performanceApiLoading ? <Spinner></Spinner> :
                            <BarChart data={endingMembership} prop={type} sign={""} />
                          }
                        </Item>
                      }
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      {memberMonths == 'error' ? <span style={{ color: 'red' }}><br /></span> :
                        <Item style={{ padding: '0px' }}>
                          <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', width: '70%', padding: '10px' }}>
                              <span>Member Months</span>
                            </div>
                            <div style={{ textalign: 'right', width: '30%' }}>
                              <Rank value={memberMonths?.rankPercentile} ending={serviceAreaList.length - 1} />
                            </div>
                          </div>
                          {performanceApiLoading ? <Spinner></Spinner> :
                            <BarChart data={memberMonths} prop={type} sign={""} />}
                        </Item>}
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      {revenuePmPm == 'error' ? <span style={{ color: 'red' }}><br /></span> :
                        <Item style={{ padding: '0px' }}>
                          <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', width: '70%', padding: '10px' }}>
                              <span>Revenue PMPM</span>
                            </div>
                            <div style={{ textalign: 'right', width: '30%' }}>
                              <Rank value={revenuePmPm?.rankPercentile} ending={serviceAreaList.length - 1} />
                            </div>
                          </div>
                          {performanceApiLoading ? <Spinner></Spinner> :
                            <BarChart data={revenuePmPm} prop={type} sign={"$"} />}
                        </Item>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={4}>
                      <Box sx={{ m: 0.5 }} />
                      {paidClaims == 'error' ? <span style={{ color: 'red' }}><br /></span> :
                        <Item style={{ padding: '0px' }}>
                          <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', width: '70%', padding: '10px' }}>
                              <span>Paid Expense PMPM</span>
                            </div>
                            <div style={{ textalign: 'right', width: '30%' }}>
                              <Rank value={paidClaims?.rankPercentile} ending={serviceAreaList.length - 1} />
                            </div>
                          </div>
                          {performanceApiLoading ? <Spinner></Spinner> :
                            <BarChart data={paidClaims} prop={type} sign={"$"} arrow={"+down"} />}
                        </Item>}
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      <Box sx={{ m: 0.5 }} />
                      {mlr == 'error' ? <span style={{ color: 'red' }}><br /></span> :
                        <Item style={{ padding: '0px' }}>
                          <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', width: '70%', padding: '10px' }}>
                              <span>MLR</span>
                            </div>
                            <div style={{ textalign: 'right', width: '30%' }}>
                              <Rank value={mlr?.rankPercentile} ending={serviceAreaList.length - 1} />
                            </div>
                          </div>
                          {performanceApiLoading ? <Spinner></Spinner> :
                            <BarChart data={mlr} prop={type} sign={"%"} />}
                        </Item>}
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      <Box sx={{ m: 0.5 }} />
                      {allowedPmPm == 'error' ? <span style={{ color: 'red' }}><br /></span> :
                        <Item style={{ padding: '0px' }}>
                          <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ display: 'flex', width: '75%', padding: '10px' }}>
                              <span>Allowed Expense PMPM</span>
                            </div>
                            <div style={{ textalign: 'right', width: '25%' }}>
                              <Rank value={allowedPmPm?.rankPercentile} ending={serviceAreaList.length - 1} />
                            </div>
                          </div>
                          {performanceApiLoading ? <Spinner></Spinner> :
                            <BarChart data={allowedPmPm} prop={type} sign={"$"} />}
                        </Item>}
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Box>
            <Box className="claimsBox" sx={{ display: 'flex' }} >
              <div style={{ width: '100%' }} >
                <div style={{ width: '100%', paddingLeft: '10px' }}>
                  <div className="hccRadioDiv" >
                    <RadioGroup size="small"
                      row
                      name="row-radio-buttons-group"
                      value={claimVarianceType}
                      onChange={handleClaimVarianceType}
                      defaultValue='inpatient'
                    >
                      <FormControlLabel value="inpatient" checked={claimVarianceType == 'inpatient'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >IP</span>} />
                      <FormControlLabel value="outpatient" checked={claimVarianceType == 'outpatient'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >OP</span>} />
                      <FormControlLabel value="physician" checked={claimVarianceType == 'physician'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Phy</span>} />
                      <FormControlLabel value="pharmacy" checked={claimVarianceType == 'pharmacy'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Pharm</span>} />
                      <FormControlLabel value="capitation" checked={claimVarianceType == 'capitation'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Cap/Ven</span>} />
                      <FormControlLabel value="intrst" checked={claimVarianceType == 'intrst'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Intrst/Net Rein/Oth</span>} />
                      <FormControlLabel value="total" checked={claimVarianceType == 'total'} control={<Radio className="hccRadioPadding" size="small" />} label={<span className="radioFontDisplay" >Total</span>} />
                    </RadioGroup>
                  </div>
                  {/* <Item style={{ padding: "0px", marginRight: '10px' }}> */}
                    <div style={{ display: 'flex', width: '100%', padding: '0px' }}>
                      <div className="PMPMTrendLeft">{
                        amountType == "Paid" ? <span style={{ fontWeight: '500' }}> Paid Expense PMPM Trend by Type of Service</span> :
                          <span style={{ fontWeight: '500' }}>Allowed Expense PMPM Trend by Type of Service</span>
                      }
                      </div>
                      <div style={{ display: 'flex', width: '30%', }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id="including-ibnr-label"><span className="fontDisplay">Including IBNR</span></InputLabel>
                          <Select
                            labelId="including-ibnr-label"
                            id="including-ibnr"
                            value={ibnr}
                            label="Including IBNR"
                            style={{ fontSize: '12px' }}
                            onChange={handleIbnr}                >
                            <MenuItem value={'Y'}>Yes</MenuItem>
                            <MenuItem value={'N'}>No</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div>
                      <div>
                        {paidClaimsY1 == 'error' ? <span style={{ width: '100%', color: 'red' }}>Error loading data</span> : 
                          <>
                            {trendApiLoading ? <Spinner></Spinner> :
                              <LineChartTrends data={paidClaimsData} sign={'$'} type={type} />} </>
                        }
                      </div>
                    </div>
                    <div style={{ width: '100%' }}>
                      <div>
                        <span style={{ fontWeight: '500' }}>Expense Variance by Type of Service</span>
                      </div>
                      <div>
                        {hccGraph1 == 'error' ? <span style={{ color: 'red' }}><br />Error loading data</span> :
                          <>
                            {varianceApiLoading ? <Spinner></Spinner> :
                              <div style={{ display: 'flex', width: '100%' }}>
                                <div style={{ display: 'flex', width: '33%' }}>
                                  <HccChart1 data={hccGraph1} prop={type} hcctype={claimVarianceType} />
                                </div>
                                <div style={{ display: 'flex', width: '33%' }}>
                                  <HccChart2 data={hccGraph2} prop={type} hcctype={claimVarianceType} />
                                </div>
                                <div style={{ display: 'flex', width: '33%' }}>
                                  <HccChart3 data={hccGraph3} prop={type} hcctype={claimVarianceType} />
                                </div>
                              </div>}
                          </>
                        }
                      </div>
                    </div>
                  {/* </Item> */}
                </div>
              </div>
            </Box>         
          </Box>
          <Box className="parentBox">
          <Box className="mlrtrendBox">
          <span style={{ fontWeight: '500' }}>MLR Trend</span>
          <div>
          {mlrTrendData == 'error' ? <span style={{ width: '100%', color: 'red' }}>Error loading data</span> : 
                          <>
                            { mlrtrendApiLoading ? <Spinner></Spinner> :
                              <LineChartTrends data={mlrTrendData} sign={'%'} type={type} />} </>
                        }
          </div>         
         </Box>
         <Box className="membershipBox">
         <span style={{ fontWeight: '500' }}>Membership Mix By Segment </span>
         <TrendBarChart data={paidClaimsData} />
         </Box>
         </Box>
        </div>
      </div>
     
      <div style={{ display: 'flex' }}>
        {type == "targetVsActual" ? <TargetLabel /> : <PriorLabel />}
      </div>
      <div >
        <br />

      </div>
    </div>
  )
}