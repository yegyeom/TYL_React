import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import DetailAssetHeader from '../presentational/DetailAssetHeader';
import DetailAsset from '../presentational/DetailAsset';

const MyAssetContainer = () => {
  let match = useRouteMatch();

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

  const AssetBox = [
    {
      title: '주식',
      link: 'stock',
      total: '190,000 TYL',
      today: '+',
      value: '4,580,000,000',
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

  const StockBox = [];
  const BtcBox = [];

  return (
    <>
      <DetailAssetHeader asset_name={asset_name} />
      <DetailAsset asset_name={asset_name} AssetBox={AssetBox} />
    </>
  );
};

export default MyAssetContainer;
