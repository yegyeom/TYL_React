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

  var assetName;

  for (var key in linkNameBox) {
    if (link === linkNameBox[key].link) {
      assetName = linkNameBox[key].title;
    }
  }

  const TotalAssetBox = [
    {
      title: '주식',
      link: 'stock',
      total: 190000,
      today: '+',
      value: 4580000,
      percent: 5.1,
    },
    {
      title: '비트코인',
      link: 'btc',
      total: 0,
      today: '-',
      value: 10580000,
      percent: 8.4,
    },
  ];

  const StockBox = [
    {
      title: '카카오뱅크',
      qty: 12, //현재 보유 수량
      total: 302200, //총 가격
      today: '+', //증감
      value: 91000, //오늘 증감량
      percent: 20.3,
      img: 'https://t1.daumcdn.net/cfile/tistory/997BD7335D089C3023',
    },
    {
      title: '삼성전자',
      qty: 20,
      total: 1800200,
      today: '-',
      value: 3000,
      percent: 5.4,
      img: 'https://images.samsung.com/kdp/aboutsamsung/brand_identity/logo/256_144_3.png?$512_288_PNG$',
    },
    {
      title: '네이버',
      qty: 2,
      total: 302200,
      today: '+',
      value: 91000,
      percent: 20.3,
      img: 'https://lh3.googleusercontent.com/proxy/YQj9sIMGgiuFOg5RAt1aA0UmAKNDIcoTdZx0CvFR6xfr2MurFu6VIPMMHPT8hw617baosotKw4PI01-bVAtPC3iF3d26rG3aQarLrNfVJHipBg5VtZSpY9Bny2DNnR-ftE5PmCjRYtDN_22mKg2fAs04U0vmnp0pYoPVCkwL4CsPnZlPhCCaIBq_z-a0szx4UHfIAFzc_04O3RUpZl8Qlf82RFvwI7jj0s0',
    },
    {
      title: '대한항공',
      qty: 5,
      total: 1800200,
      today: '-',
      value: 3000,
      percent: 5.4,
      img: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTJfNjEg/MDAxNTYwMzIzMjY5MTAw.WcW3L_E8WZc7HRijy7jbW63Tb41cXwX1oL_FGNMfDMog.YZiX7AD4wc75NH7LNLnR-Wjh3tY4enb2ftDmGGLwLBMg.PNG.ica366/B4EBC7D1C7%D7%B0F8_B7%CE%B0ED_(1).png?type=w800',
    },
  ];

  const BtcBox = [];
  const BtcTradeBox = [];

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
        AssetBox={assetName === '주식' ? StockBox : BtcBox}
        TradeBox={assetName === '주식' ? StockTradeBox : BtcTradeBox}
      />
    </>
  );
};

export default MyAssetContainer;
