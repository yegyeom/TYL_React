import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import { useRouteMatch } from 'react-router-dom';
import DetailAssetHeader from '../presentational/DetailAssetHeader';
import DetailAsset from '../presentational/DetailAsset';

const MyAssetContainer = () => {
  const todayTime = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;
    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);
    var timeString = hours + ':' + minutes + ':' + seconds;

    return dateString + ' ' + timeString;
  };

  let match = useRouteMatch();

  const validity = useSelector(checkValidity);
  const [cash, setCash] = useState(0);

  const [coinAsset, setCoinAsset] = useState(0);
  const [coinBox, setCoinBox] = useState([]);
  const [coinProfit, setCoinProfit] = useState(0);
  const [coinToday, setCoinToday] = useState('');
  const [coinPercent, setCoinPercent] = useState(0);

  const [stockAsset, setStockAsset] = useState(0);
  const [stockBox, setStockBox] = useState([]);
  const [stockProfit, setStockProfit] = useState(0);
  const [stockToday, setStockToday] = useState('');
  const [stockPercent, setStockPercent] = useState(0);

  const [inProgress, setInProgress] = useState(true);

  useEffect(() => {
    if (validity) {
      axios.get('asset').then(res => {
        setCash(res.data.cash.amount);

        setCoinAsset(res.data.coin.coinAsset);
        setCoinBox(res.data.coin.coinList);
        setCoinProfit(res.data.coin.coinProfit);
        if (res.data.coin.coinProfit === 0 && res.data.coin.coinAsset === 0) setCoinPercent(0);
        else {
          setCoinPercent(
            (res.data.coin.coinProfit / (res.data.coin.coinAsset - res.data.coin.coinProfit)) * 100,
          );
        }

        setStockAsset(res.data.stock.stockAsset);
        setStockBox(res.data.stock.stockList);
        setStockProfit(res.data.stock.stockProfit);
        if (res.data.stock.stockProfit === 0 && res.data.stock.stockAsset === 0) setStockPercent(0);
        else {
          setStockPercent(
            (res.data.stock.stockProfit /
              (res.data.stock.stockAsset - res.data.stock.stockProfit)) *
              100,
          );
        }

        if (res.data.coin.coinProfit < 0) setCoinToday('-');
        else if (res.data.coin.coinProfit > 0) setCoinToday('+');

        if (res.data.stock.stockProfit < 0) setStockToday('-');
        else if (res.data.stock.stockProfit > 0) setStockToday('+');

        setInProgress(false);
      });
    }
  }, [validity]);

  const url = match.url.split('/');
  const link = url[url.length - 1];

  const linkNameBox = [
    { link: 'cash', title: '현금' },
    { link: 'stock', title: '주식' },
    { link: 'coin', title: '암호화폐' },
  ];

  var assetName;

  for (var key in linkNameBox) {
    if (link === linkNameBox[key].link) {
      assetName = linkNameBox[key].title;
    }
  }

  const TotalAssetBox = [
    {
      title: '현금',
      link: 'cash',
      total: cash,
      today: '-',
      value: '',
      percent: '',
    },
    {
      title: '주식',
      link: 'stock',
      total: stockAsset,
      today: stockToday,
      value: stockProfit,
      percent: stockPercent,
    },
    {
      title: '암호화폐',
      link: 'coin',
      total: coinAsset,
      today: coinToday,
      value: coinProfit,
      percent: coinPercent,
    },
  ];

  if (inProgress) return <div></div>;
  return (
    <>
      <DetailAssetHeader assetName={assetName} />
      <DetailAsset
        todayTime={todayTime()}
        assetName={assetName}
        TotalAssetBox={TotalAssetBox}
        AssetBox={assetName === '주식' ? stockBox : coinBox}
      />
    </>
  );
};

export default MyAssetContainer;
