import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import Predict from '../presentation/Predict';

const PredictContainer = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  const [inProgress1, setInProgress1] = useState(true);
  const [inProgress2, setInProgress2] = useState(true);
  const [rfPredict, setRfPredict] = useState([]);
  const [xgbPredict, setXgbPredict] = useState([]);

  useEffect(() => {
    axios.get('/api/prediction').then(res => {
      setRfPredict(res.data.prediction.rf);
      setInProgress1(false);
      //console.log(res.data.prediction);
    });
  }, []);

  useEffect(() => {
    axios.get('/api/prediction').then(res => {
      setXgbPredict(res.data.prediction.xgb);
      setInProgress2(false);
      //console.log(res.data.prediction);
    });
  }, []);

  if (inProgress1 || inProgress2) {
    return <div></div>;
  }

  rfPredict.sort(function (a, b) {
    return parseFloat(a.code) - parseFloat(b.code);
  });
  
  xgbPredict.sort(function (a, b) {
    return parseFloat(a.code) - parseFloat(b.code);
  });

  let rfModified = rfPredict.map(({ code, name, rate: rf }) => ({
    code,
    name,
    rf,
  }));

  let xgbModified = xgbPredict.map(({ code, name, rate: xgb }) => ({
    code,
    name,
    xgb,
  }));

  // 평균값 계산
  let average = [];
  for (let i = 0; i < rfPredict.length; i++) {
    average[i] = Math.round(((rfModified[i].rf + xgbModified[i].xgb) / 2) * 100) / 100;
  }

  // rfPredict + xgbPredict
  let newObj = [];
  for (let i = 0; i < rfPredict.length; i++) {
    newObj[i] = Object.assign({}, rfModified[i], xgbModified[i]);
  }

  for (let i = 0; i < rfPredict.length; i++) {
    newObj[i].average = average[i];
  }

  for (let i = 0; i < rfPredict.length; i++) {
    newObj[i].order = i + 1;
  }

  return (
    <>
      <Predict info={newObj} isPc={isPc} />
    </>
  );
};

export default PredictContainer;
