import React from 'react';
import '../../../../styles/sass/main.css';

const AssetTotal = ({ isPc, asset }) => {
  return (
    <div className="total-asset-container">
      <ul className="total-asset-box" id={isPc ? null : 'm'}>
        <li> 총 자산 </li>
        <li id="right">{asset} TYL</li>
      </ul>
    </div>
  );
};

export default AssetTotal;
