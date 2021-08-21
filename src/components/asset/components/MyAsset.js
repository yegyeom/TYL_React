import React from 'react';
import '../../../styles/sass/main.css';
import DetailMyAsset from './DetailMyAsset';

const Header = ({ link }) => {
  const linkNameBox = [
    { link: 'stock', title: '주식' },
    { link: 'btc', title: '비트코인' },
  ];

  const linkNameList = linkNameBox.map((menu, idx) =>
    menu.link === link ? <h3 key={idx}>{menu.title} 보유량</h3> : '',
  );

  return (
    <div className="total-asset-container">
      <div className="my-asset-box">{linkNameList}</div>
    </div>
  );
};

const MyAsset = ({ match }) => {
  const url = match.url.split('/');
  const link = url[url.length - 1];

  return (
    <>
      <Header link={link} />
      <DetailMyAsset link={link} />
    </>
  );
};

export default MyAsset;
