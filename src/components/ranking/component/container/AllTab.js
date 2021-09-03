import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllRank from '../presentational/AllRank';

const AllTab = () => {
  const [inProgress, setInProgress] = useState(true);
  const [assetRank, setAssetRank] = useState([]);
  const [profitRank, setProfitRank] = useState([]);

  useEffect(() => {
    axios.get('rank/asset').then(res => {
      setAssetRank(res.data.rank);
      setInProgress(false);
      //console.log(res.data.rank);
    });
  }, []);

  useEffect(() => {
    axios.get('rank/preday-history').then(res => {
      setProfitRank(res.data.upperRank);
      setInProgress(false);
      //console.log(res.data.upperRank);
    });
  }, []);

  if (inProgress) {
    return <div></div>;
  }

  // json add data(ranking)
  for (let i = 0; i < assetRank.length; i++) {
    assetRank[i].ranking = i + 1;
  }

  for (let i = 0; i < profitRank.length; i++) {
    profitRank[i].ranking = i + 1;
  }

  for (let i = 0; i < assetRank.length; i++) {
    assetRank[i].asset = assetRank[i].asset.toLocaleString();
  }

  return (
    <>
      <AllRank ainfo={assetRank} yinfo={profitRank} />
    </>
  );
};

export default AllTab;
