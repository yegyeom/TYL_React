import React from 'react';
import '../../../../styles/sass/main.css';

const AssetTotal = ({ asset }) => {
  return (
    <div className="total-asset-container">
      <ul className="total-asset-box">
        <li> 총 자산 </li>
        <li id="right">{asset} TYL</li>
      </ul>
    </div>
  );
};

export default AssetTotal;
