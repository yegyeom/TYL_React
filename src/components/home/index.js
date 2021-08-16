import React from 'react';
import GoogleButton from '../auth/GoogleButton';
import AssetRank from './container/AssetRank';

const index = () => {
  return (
    <>
      <ul className="homeRank">
        <h5>틸러들의 자산 순위</h5>
        <AssetRank />
      </ul>
      <GoogleButton />
    </>
  );
};

export default index;
