import React from 'react';
import TotalAsset from './components/TotalAsset.js';
import AssetGraph from './components/AssetGraph.js';
import AssetList from './components/AssetList.js';
const index = () => {
  return (
    <>
      <TotalAsset />
      <AssetGraph />
      <AssetList />
    </>
  );
};

export default index;
