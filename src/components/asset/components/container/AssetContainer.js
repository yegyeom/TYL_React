import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import AssetTotal from '../presentational/AssetTotal';
import AssetGraph from '../presentational/AssetGraph';
import AssetList from '../presentational/AssetList';
import cash_icon from '../../../../styles/images/cash_icon.png';
import stock_icon from '../../../../styles/images/stock_icon.png';
import coin_icon from '../../../../styles/images/coin_icon.png';

const AssetConatiner = () => {
  const todayTime = () => {
    var today = new Date();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = month + '/' + day;

    return dateString;
  };

  const validity = useSelector(checkValidity);
  const [asset, setAsset] = useState(0);
  const [cash, setCash] = useState(0);

  const [coinAsset, setCoinAsset] = useState(0);
  const [coinProfit, setCoinProfit] = useState(0);
  const [coinToday, setCoinToday] = useState('');
  const [coinPercent, setCoinPercent] = useState(0);

  const [stockAsset, setStockAsset] = useState(0);
  const [stockProfit, setStockProfit] = useState(0);
  const [stockToday, setStockToday] = useState('');
  const [stockPercent, setStockPercent] = useState(0);

  const [history, setHistory] = useState([]);

  let match = useRouteMatch();

  useEffect(() => {
    if (!validity) return;
    axios.get('asset').then(res => {
      setAsset(res.data.asset);
      setCash(res.data.cash.amount);

      setCoinAsset(res.data.coin.coinAsset);
      setCoinProfit(res.data.coin.coinProfit);
      if (res.data.coin.coinProfit === 0 && res.data.coin.coinAsset === 0) {
        setCoinPercent(0);
      } else {
        setCoinPercent(
          (res.data.coin.coinProfit / (res.data.coin.coinAsset - res.data.coin.coinProfit)) * 100,
        );
      }

      setStockAsset(res.data.stock.stockAsset);
      setStockProfit(res.data.stock.stockProfit);
      if (res.data.stock.stockProfit === 0 && res.data.stock.stockAsset == 0) {
        setStockPercent(0);
      } else {
        setStockPercent(
          (res.data.stock.stockProfit / (res.data.stock.stockAsset - res.data.stock.stockProfit)) *
            100,
        );
      }

      if (res.data.stock.stockProfit < 0) setStockToday('-');
      else if (res.data.stock.stockProfit > 0) setStockToday('+');

      if (res.data.coin.coinProfit < 0) setCoinToday('-');
      else if (res.data.coin.coinProfit > 0) setCoinToday('+');
    });

    axios.get('asset/history').then(res => {
      setHistory(res.data.history);
    });
  }, [validity]);

  const data = [
    {
      title: '1-week',
      id: 'TYL',
      data: [
        {
          x: '08.31',
          y: 1000000,
        },
        {
          x: '09.01',
          y: 898000,
        },
        {
          x: '09.02',
          y: 895620,
        },
        {
          x: '09.03',
          y: 973340,
        },
        {
          x: '09.04',
          y: 1012000,
        },
        {
          x: '09.05',
          y: 1400000,
        },
      ], //함수로 call해야겠다 {history1Week}
    },
    {
      title: '1-month',
      id: 'TYL',
      data: [
        {
          x: '20.4',
          y: 1000000,
        },
        {
          x: '20.5',
          y: 870000,
        },
        {
          x: '20.6',
          y: 1010000,
        },
        {
          x: '20.7',
          y: 1446000,
        },
      ],
    },
    // {
    //   title: '3-month',
    //   id: 'TYL',
    //   data: [
    //     {
    //       x: '20.4',
    //       y: 1000000,
    //     },
    //     {
    //       x: '20.5',
    //       y: 870000,
    //     },
    //     {
    //       x: '20.6',
    //       y: 1010000,
    //     },
    //   ],
    // },
    // {
    //   title: '6-month',
    //   id: 'TYL',
    //   data: [
    //     {
    //       x: '20.4',
    //       y: 1000000,
    //     },
    //     {
    //       x: '20.5',
    //       y: 870000,
    //     },
    //     {
    //       x: '20.6',
    //       y: 1010000,
    //     },
    //     {
    //       x: '20.7',
    //       y: 946000,
    //     },
    //     {
    //       x: '20.8',
    //       y: 990420,
    //     },
    //     {
    //       x: '20.9',
    //       y: 1000000,
    //     },
    //   ],
    // },
  ];

  const AssetBox = [
    {
      title: '주식',
      link: 'stock',
      img: stock_icon,
      total: stockAsset,
      today: stockToday,
      value: stockProfit,
      percent: stockPercent,
    },
    {
      title: '암호화폐',
      link: 'coin',
      img: coin_icon,
      total: coinAsset,
      today: coinToday,
      value: coinProfit,
      percent: coinPercent,
    },
  ];

  const CashBox = {
    title: '현금',
    img: cash_icon,
    total: cash,
  };

  return (
    <>
      <AssetTotal asset={asset.toLocaleString('ko-KR')} />
      <AssetGraph data={data} />
      <AssetList AssetBox={AssetBox} CashBox={CashBox} match={match} />
    </>
  );
};

export default AssetConatiner;
