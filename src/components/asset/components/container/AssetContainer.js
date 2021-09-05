import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import AssetTotal from '../presentational/AssetTotal';
import AssetGraph from '../presentational/AssetGraph';
import AssetList from '../presentational/AssetList';
import cash_icon from '../../../../styles/images/cash_icon.svg';
import stock_icon from '../../../../styles/images/stock_icon.svg';
import coin_icon from '../../../../styles/images/coin_icon.svg';
import { useMediaQuery } from 'react-responsive';

const AssetConatiner = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

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
  const [inProgress, setInProgress] = useState(true);
  const [data, setData] = useState([]);

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
      setInProgress(false);
    });
  }, [validity]);

  useEffect(() => {
    if (inProgress) return;
    const data = [];
    const totalObj = { title: 'total', id: 'TYL', data: [] };

    history.map((menu, idx) => {
      if (menu.hasOwnProperty('asset')) {
        menu.y = menu.asset;
        delete menu.asset;
      }
      if (menu.hasOwnProperty('date')) {
        var date = new Date(menu.date);
        var res = ('0' + (date.getMonth() + 1)).slice(-2) + '.' + ('0' + date.getDate()).slice(-2);
        menu.x = res;
        delete menu.date;
      }
      totalObj.data.push(menu);
    });

    data.push(totalObj);
    data.push(
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
          {
            x: '20.8',
            y: 795040,
          },
          {
            x: '20.9',
            y: 946000,
          },
        ],
      },
      {
        title: '3-month',
        id: 'TYL',
        data: [
          {
            x: '20.4',
            y: 256600,
          },
          {
            x: '20.5',
            y: 170000,
          },
          {
            x: '20.6',
            y: 210000,
          },
          {
            x: '20.7',
            y: 34460,
          },
        ],
      },
    );
    setData(data);
  }, [inProgress]);

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

  if (inProgress) return <div></div>;
  return (
    <>
      <AssetTotal isPc={isPc} asset={asset.toLocaleString('ko-KR')} />
      <AssetGraph isPc={isPc} data={data} />
      <AssetList isPc={isPc} AssetBox={AssetBox} CashBox={CashBox} match={match} />
    </>
  );
};

export default AssetConatiner;
