import React from 'react';
import '../../../../styles/sass/main.css';

const DetailAssetHeader = ({ assetName }) => {
  return (
    <div className="total-asset-container">
      <div className="total-asset-box" style={{ display: 'block' }}>
        <h3 style={{ margin: '2%' }}>{assetName} 보유량</h3>
      </div>
    </div>
  );
};

export default DetailAssetHeader;
