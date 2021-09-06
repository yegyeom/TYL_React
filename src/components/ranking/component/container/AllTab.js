import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllRank from '../presentational/AllRank';

const AllTab = ({ isPc }) => {
  const [inProgress1, setInProgress1] = useState(true);
  const [inProgress2, setInProgress2] = useState(true);
  const [assetRank, setAssetRank] = useState([]);
  const [profitRank, setProfitRank] = useState([]);
  let mounted = true;

  useEffect(() => {
    axios.get('rank/asset').then(res => {
      if (mounted) {
        setAssetRank(res.data.rank);
        setInProgress1(false);
      }
      //console.log(res.data.rank);
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    axios.get('rank/preday-history').then(res => {
      if (mounted) {
        setProfitRank(res.data.upperRank);
        setInProgress2(false);
      }
      //console.log(res.data.upperRank);
    });
    return () => (mounted = false);
  }, []);

  if (inProgress1 || inProgress2) {
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
      <AllRank ainfo={assetRank} yinfo={profitRank} isPc={isPc} />
    </>
  );
};

export default AllTab;
