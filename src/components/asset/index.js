import React, { useEffect, useState } from 'react';
import TotalAsset from './components/TotalAsset.js';
import AssetGraph from './components/AssetGraph.js';
import AssetList from './components/AssetList.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../auth/userSlice';

const index = () => {
  const validity = useSelector(checkValidity);
  const [asset, setAsset] = useState(0);

  useEffect(() => {
    if (validity)
      axios.get('asset').then(res => {
        setAsset(res.data.asset);
      });
  }, [validity]);

  return (
    <>
      <TotalAsset asset={asset.toLocaleString('ko-KR')} />
      <AssetGraph />
      <AssetList />
    </>
  );
};

export default index;
