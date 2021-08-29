import React from 'react';
import AssetRank from './container/AssetRank';
import BestRank from './container/BestRank';
import WorstRank from './container/WorstRank';

const index = () => {
  return (
    <>
      <ul className="home-best">
        <ul className="profit-text-box">
          <div className="etc-text">8/23(전일대비)</div>
          <div className="profit-text">Best TYL Player</div>
        </ul>
        <BestRank />
      </ul>
      <ul className="home-best">
        <ul className="profit-text-box">
          <div className="etc-text">8/23(전일대비)</div>
          <div className="profit-text">Worst TYL Player</div>
        </ul>
        <WorstRank />
      </ul>
      <ul className="homeRank">
        <h5>틸러들의 자산 순위</h5>
        <AssetRank />
      </ul>
    </>
  );
};

export default index;
