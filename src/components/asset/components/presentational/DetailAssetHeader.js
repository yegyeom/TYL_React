import React from 'react';
import '../../../../styles/sass/main.css';

const DetailAssetHeader = ({ asset_name }) => {
  return (
    <div className="total-asset-container">
      <div className="total-asset-box" style={{ display: 'block' }}>
        <h3 style={{ margin: '2%' }}>{asset_name} 보유량</h3>
      </div>
    </div>
  );
};

export default DetailAssetHeader;
