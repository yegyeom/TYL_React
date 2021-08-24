import React from 'react';
import '../../../../styles/sass/main.css';

const DetailAsset = ({ asset_name, AssetBox }) => {
  const TotalAsset = AssetBox.map((menu, idx) => {
    if (menu.title === asset_name) {
      return (
        <>
          <div className="my-asset">
            <ul className="asset-tabs-left">
              <li>내 {menu.title}</li>
              <li>{menu.total}</li>
            </ul>
            <ul className="asset-tabs-right">
              <li className={menu.today === '+' ? 'increase' : 'decrease'}>
                {menu.today} {menu.value}
              </li>
              <li className={menu.today === '+' ? 'increase' : 'decrease'}>({menu.percent}%)</li>
            </ul>
          </div>
        </>
      );
    }
  });

  return (
    <div className="my-asset-container">
      <div id="asset" style={{ paddingTop: '15px' }}>
        {TotalAsset}
        <hr width="90%" color="#c4c4c4" noshade />
      </div>
    </div>
  );
};

export default DetailAsset;
