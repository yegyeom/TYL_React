import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/sass/main.css';

const AssetList = ({ AssetBox, match }) => {
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
