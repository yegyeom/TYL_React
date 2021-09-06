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
    });
  }, []);

  if (inProgress) {
    return <div></div>;
  }

  // 내림차순 정렬
  rank.sort(function (b, a) {
    return parseFloat(b.profit) - parseFloat(a.profit);
  });
  //console.log(rank);

  return <Ticker info={rank} str="worst" />;
};

export default WorstRank;
