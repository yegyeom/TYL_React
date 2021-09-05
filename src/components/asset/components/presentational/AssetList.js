import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/sass/main.css';

const AssetList = ({ isPc, AssetBox, CashBox, match }) => {
  const AssetList = AssetBox.map((menu, idx) => (
    <li key={idx}>
      <Link to={`${match.url}/${menu.link}`}>
        <div style={{ width: '50px', paddingTop: '5px' }}>
          <img src={menu.img} width="100%" />
        </div>
        <div className="gang" style={{ paddingLeft: '0px' }}>
          <ul className="asset-tabs-left">
            <li>{menu.title}</li>
            <li>{menu.total.toLocaleString('ko-KR')} TYL</li>
          </ul>
          {
            <ul className="asset-tabs-right">
              <li
                className={
                  menu.today === '+' ? 'increase' : menu.today === '' ? 'maintain' : 'decrease'
                }
              >
                {menu.today === '+' ? '+' : ''} {menu.value.toLocaleString('ko-KR')}
              </li>
              <li
                className={
                  menu.today === '+' ? 'increase' : menu.today === '' ? 'maintain' : 'decrease'
                }
              >
                ({menu.percent.toFixed(2)}%)
              </li>
            </ul>
          }
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <div className="asset-list-container">
        <ul id="asset" className={isPc ? null : 'm'}>
          <li className="list-cash">
            <div style={{ width: '50px', paddingTop: '5px' }}>
              <img src={CashBox.img} width="100%" />
            </div>
            <div className="gang" style={{ paddingLeft: '0px' }}>
              <ul className="asset-tabs-left">
                <li>{CashBox.title}</li>
                <li>{CashBox.total.toLocaleString('ko-KR')} TYL</li>
              </ul>
            </div>
          </li>
          {AssetList}
        </ul>
      </div>
    </>
  );
};

export default AssetList;
