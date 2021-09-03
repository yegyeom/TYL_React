import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticker from '../presentational/Ticker';

const BestRank = () => {
  const [inProgress, setInProgress] = useState(true);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    // https://testyourlife.kro.kr/preday-history
    axios.get('rank/preday-history').then(res => {
      setRank(res.data.upperRank);
      setInProgress(false);
      //console.log(res.data.upperRank);
    });
  }, []);

  // 비동기 통신이라 필요없는 값 잡아줌
  if (inProgress) {
    return <div></div>;
  }

  return <Ticker info={rank} str="best" />;
};

export default BestRank;
