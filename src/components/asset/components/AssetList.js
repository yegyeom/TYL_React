import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import '../../../styles/sass/main.css';
import stock_icon from '../../../styles/images/stock_icon.png';
import btc_icon from '../../../styles/images/btc_icon.png';

const AssetList = () => {
  let match = useRouteMatch();
  const AssetBox = [
    {
      title: '주식',
      link: 'stock',
      img: stock_icon,
      total: '190,000 TYL',
      today: '+',
      value: '4,580',
      percent: '5.1',
    },
    {
      title: '비트코인',
      link: 'btc',
      img: btc_icon,
      total: '111,000 TYL',
      today: '-',
      value: '10,580',
      percent: '8.4',
    },
  ];

  const AssetList = AssetBox.map((menu, idx) => (
    <li key={idx}>
      <Link to={`${match.url}/${menu.link}`}>
        <div className="asset-tabs-img">
          <img src={menu.img} width="100%" />
        </div>
        <ul className="asset-tabs-left">
          <li>{menu.title}</li>
          <li>{menu.total}</li>
        </ul>
        <ul className="asset-tabs-right">
          <li className={menu.today === '+' ? 'increase' : 'decrease'}>
            {menu.today} {menu.value}
          </li>
          <li className={menu.today === '+' ? 'increase' : 'decrease'}>({menu.percent}%)</li>
        </ul>
      </Link>
    </li>
  ));

  return (
    <>
      <div className="asset-list-container">
        <ul id="asset">{AssetList}</ul>
      </div>
    </>
  );
};

export default AssetList;
