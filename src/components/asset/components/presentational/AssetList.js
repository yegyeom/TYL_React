import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/sass/main.css';

const AssetList = ({ AssetBox, match }) => {
  const AssetList = AssetBox.map((menu, idx) => (
    <li key={idx}>
      <Link to={`${match.url}/${menu.link}`}>
        <div style={{ width: '15%' }}>
          <img src={menu.img} width="100%" />
        </div>
        <div className="gang" style={{ paddingLeft: '10px' }}>
          <ul className="asset-tabs-left">
            <li>{menu.title}</li>
            <li>{menu.total.toLocaleString('ko-KR')} TYL</li>
          </ul>
          {menu.link === 'cash' ? null : (
            <ul className="asset-tabs-right">
              <li
                className={
                  menu.today === '+' ? 'increase' : menu.today === '' ? 'maintain' : 'decrease'
                }
              >
                {menu.today} {menu.value.toLocaleString('ko-KR')}
              </li>
              <li
                className={
                  menu.today === '+' ? 'increase' : menu.today === '' ? 'maintain' : 'decrease'
                }
              >
                ({menu.percent.toFixed(1)}%)
              </li>
            </ul>
          )}
        </div>
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
