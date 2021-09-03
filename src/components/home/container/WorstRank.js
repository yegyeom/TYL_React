import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticker from '../presentational/Ticker';

const WorstRank = () => {
  const [inProgress, setInProgress] = useState(true);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    // https://testyourlife.kro.kr/preday-history
    axios.get('rank/preday-history').then(res => {
      setRank(res.data.lowerRank);
      setInProgress(false);
      // console.log(res.data);
    });
  }, []);

  if (inProgress) {
    return <div></div>;
  }

  return <Ticker info={rank} str="worst" />;
};

export default WorstRank;
