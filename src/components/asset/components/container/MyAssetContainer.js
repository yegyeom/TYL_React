import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import { useRouteMatch } from 'react-router-dom';
import DetailAssetHeader from '../presentational/DetailAssetHeader';
import DetailAsset from '../presentational/DetailAsset';

const MyAssetContainer = () => {
  let match = useRouteMatch();

  const validity = useSelector(checkValidity);
  const [cash, setCash] = useState(0);
  const [coinAsset, setCoinAsset] = useState(0);
  const [stockAsset, setStockAsset] = useState(0);
  const [stockBox, setStockBox] = useState([]);
  const [stockProfit, setStockProfit] = useState(0);
  const [stockToday, setStockToday] = useState('');
  const [stockPercent, setStockPercent] = useState(0);

  useEffect(() => {
    if (validity)
      axios.get('asset').then(res => {
        setCash(res.data.cash.amount);
        setCoinAsset(res.data.coin.coinAsset);
        setStockAsset(res.data.stock.stockAsset);
        setStockBox(res.data.stock.stockList);
        setStockProfit(res.data.stock.stockProfit);
        setStockPercent(
          (Math.abs(res.data.stock.stockProfit) /
            (res.data.stock.stockAsset + res.data.stock.stockProfit)) *
            100,
        );

        if (res.data.stock.stockProfit < 0) setStockToday('-');
        else if (res.data.stock.stockProfit > 0) setStockToday('+');

        console.log(res.data.stock);
      });
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
      today: '-',
      value: 10580000,
      percent: 8.4,
    },
  ];

  // const StockBox = [
  //   {
  //     title: '카카오뱅크',
  //     qty: 12, //현재 보유 수량
  //     total: 302200, //총 가격
  //     today: '+', //증감
  //     value: 91000, //오늘 증감량
  //     percent: 20.3,
  //     img: 'https://t1.daumcdn.net/cfile/tistory/997BD7335D089C3023',
  //   },
  //   {
  //     title: '삼성전자',
  //     qty: 20,
  //     total: 1800200,
  //     today: '-',
  //     value: 3000,
  //     percent: 5.4,
  //     img: 'https://images.samsung.com/kdp/aboutsamsung/brand_identity/logo/256_144_3.png?$512_288_PNG$',
  //   },
  //   {
  //     title: '네이버',
  //     qty: 2,
  //     total: 302200,
  //     today: '+',
  //     value: 91000,
  //     percent: 20.3,
  //     img: 'https://lh3.googleusercontent.com/proxy/YQj9sIMGgiuFOg5RAt1aA0UmAKNDIcoTdZx0CvFR6xfr2MurFu6VIPMMHPT8hw617baosotKw4PI01-bVAtPC3iF3d26rG3aQarLrNfVJHipBg5VtZSpY9Bny2DNnR-ftE5PmCjRYtDN_22mKg2fAs04U0vmnp0pYoPVCkwL4CsPnZlPhCCaIBq_z-a0szx4UHfIAFzc_04O3RUpZl8Qlf82RFvwI7jj0s0',
  //   },
  //   //Detail Asset List maintain ver.
  //   // {
  //   //   title: '대한항공',
  //   //   qty: 5,
  //   //   total: 1800200,
  //   //   today: '-',
  //   //   value: 3000,
  //   //   percent: 5.4,
  //   //   img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTJfNjEg/MDAxNTYwMzIzMjY5MTAw.WcW3L_E8WZc7HRijy7jbW63Tb41cXwX1oL_FGNMfDMog.YZiX7AD4wc75NH7LNLnR-Wjh3tY4enb2ftDmGGLwLBMg.PNG.ica366/B4EBC7D1C7%D7%B0F8_B7%CE%B0ED_(1).png?type=w800',
  //   // },
  //   {
  //     title: '대한항공',
  //     qty: 5,
  //     total: 1800200,
  //     today: '',
  //     value: 0,
  //     percent: 0.0,
  //     img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTJfNjEg/MDAxNTYwMzIzMjY5MTAw.WcW3L_E8WZc7HRijy7jbW63Tb41cXwX1oL_FGNMfDMog.YZiX7AD4wc75NH7LNLnR-Wjh3tY4enb2ftDmGGLwLBMg.PNG.ica366/B4EBC7D1C7%D7%B0F8_B7%CE%B0ED_(1).png?type=w800',
  //   },
  // ];

  const CoinBox = [];
  const CashBox = [];
  const CoinTradeBox = [];
  const CashTradeBox = [];
  const StockTradeBox = [
    {
      title: '카카오뱅크',
      order: [
        {
          date: '2021-08-20',
          trading: '매수',
          qty: 20, //거래 수량
          one: 34000, //당시 한 주 가격
          total: 680000, //총 거래 가격
        },
        {
          date: '2021-08-22',
          trading: '매수',
          qty: 2, //거래 수량
          one: 40000, //당시 한 주 가격
          total: 80000, //총 거래 가격
        },
        {
          date: '2021-08-25',
          trading: '매도',
          qty: 10, //거래 수량
          one: 56200, //당시 한 주 가격
          total: 562000, //총 거래 가격
        },
      ],
    },
    {
      title: '삼성전자',
      order: [
        {
          date: '2021-07-02',
          trading: '매수',
          qty: 10, //거래 수량
          one: 79200, //당시 한 주 가격
          total: 792000, //총 거래 가격
        },
        {
          date: '2021-07-08',
          trading: '매도',
          qty: 2, //거래 수량
          one: 82700, //당시 한 주 가격
          total: 165400, //총 거래 가격
        },
        {
          date: '2021-08-04',
          trading: '매수',
          qty: 20, //거래 수량
          one: 80400, //당시 한 주 가격
          total: 1608000, //총 거래 가격
        },
        {
          date: '2021-07-25',
          trading: '매수',
          qty: 1, //거래 수량
          one: 75200, //당시 한 주 가격
          total: 75200, //총 거래 가격
        },
      ],
    },
  ];

  return (
    <>
      <DetailAssetHeader assetName={assetName} />
      <DetailAsset
        assetName={assetName}
        TotalAssetBox={TotalAssetBox}
        AssetBox={assetName === '주식' ? stockBox : assetName === '암호화폐' ? CoinBox : CashBox}
        TradeBox={
          assetName === '주식'
            ? StockTradeBox
            : assetName === '암호화폐'
            ? CoinTradeBox
            : CashTradeBox
        }
      />
    </>
  );
};

export default MyAssetContainer;
