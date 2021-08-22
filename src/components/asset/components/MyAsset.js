import React from 'react';
import '../../../styles/sass/main.css';
import DetailMyAsset from './DetailMyAsset';

const Header = ({ asset_name }) => {
  return (
    <div className="total-asset-container">
      <div className="total-asset-box" style={{ display: 'block' }}>
        <h3 style={{ margin: '2%' }}>{asset_name} 보유량</h3>
      </div>
    </div>
  );
};

const MyAsset = ({ match }) => {
  const url = match.url.split('/');
  const link = url[url.length - 1];

  const linkNameBox = [
    { link: 'stock', title: '주식' },
    { link: 'btc', title: '비트코인' },
  ];

  var asset_name;

  for (var key in linkNameBox) {
    if (link === linkNameBox[key].link) {
      asset_name = linkNameBox[key].title;
    }
  }

  return (
    <>
      <Header asset_name={asset_name} />
      <DetailMyAsset asset_name={asset_name} />
    </>
  );
};

export default MyAsset;
