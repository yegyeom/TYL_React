import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankList from '../presentational/RankList';

const AssetRank = () => {
  const [inProgress, setInProgress] = useState(true);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    axios.get('rank/asset').then(res => {
      setRank(res.data.rank);
      setInProgress(false);
      //console.log(res.data.rank);
    });
  }, []);

  if (inProgress) {
    return <div></div>;
  }

  // json add data(ranking)
  for (let i = 0; i < rank.length; i++) {
    rank[i].ranking = i + 1;
  }

  for (let i = 0; i < rank.length; i++) {
    rank[i].asset = rank[i].asset.toLocaleString();
  }

  return <RankList info={rank} />;
};

export default AssetRank;
