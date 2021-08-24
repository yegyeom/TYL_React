import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import AssetTotal from '../presentational/AssetTotal';
import AssetGraph from '../presentational/AssetGraph';
import AssetList from '../presentational/AssetList';
import stock_icon from '../../../../styles/images/stock_icon.png';
import btc_icon from '../../../../styles/images/btc_icon.png';

const AssetConatiner = () => {
  const validity = useSelector(checkValidity);
  const [asset, setAsset] = useState(0);
  let match = useRouteMatch();

  useEffect(() => {
    if (validity)
      axios.get('asset').then(res => {
        setAsset(res.data.asset);
      });
  }, [validity]);

  const data = [
    {
      id: 'TYL',
      data: [
        {
          x: '20.3',
          y: 1000000,
        },
        {
          x: '20.4',
          y: 150000,
        },
        {
          x: '20.5',
          y: 27000,
        },
        {
          x: '20.6',
          y: 14100000,
        },
        {
          x: '20.7',
          y: 54600,
        },
        {
          x: '20.8',
          y: 160,
        },
      ],
    },
  ];

  const AssetBox = [
    {
      title: '주식',
      link: 'stock',
      img: stock_icon,
      total: '190,000 TYL',
      today: '+',
      value: '4,580,000,000',
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

  return (
    <>
      <AssetTotal asset={asset.toLocaleString('ko-KR')} />
      <AssetGraph data={data} />
      <AssetList AssetBox={AssetBox} match={match} />
    </>
  );
};

export default AssetConatiner;
