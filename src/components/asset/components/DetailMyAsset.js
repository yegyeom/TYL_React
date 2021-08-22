import React from 'react';
import '../../../styles/sass/main.css';

const DetailMyAsset = ({ asset_name }) => {
  const AssetBox = [
    {
      title: '주식',
      link: 'stock',
      total: '190,000 TYL',
      today: '+',
      value: '4,580',
      percent: '5.1',
    },
    {
      title: '비트코인',
      link: 'btc',
      total: '111,000 TYL',
      today: '-',
      value: '10,580',
      percent: '8.4',
    },
  ];

  const TotalAsset = AssetBox.map((menu, idx) => {
    console.log(menu.link, asset_name);
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

export default DetailMyAsset;
