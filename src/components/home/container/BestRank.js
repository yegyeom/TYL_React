import React from 'react';
import Ticker from '../presentational/Ticker';
import axios from 'axios';
import '../../../styles/sass/main.css';

const BestRank = () => {
  // https://testyourlife.kro.kr/preday-history
  axios.get('rank/preday-history').then(res => {
    console.log(res.data);
  });

  const peopleRank = [
    { rank: '1위', nk_name: '나는야개미', profit: '+28.3%' },
    { rank: '2위', nk_name: '주식부자', profit: '+26.1%' },
    { rank: '3위', nk_name: '머스크', profit: '+22.9%' },
    { rank: '4위', nk_name: '수박너무비싸', profit: '+16.3%' },
    { rank: '5위', nk_name: '할수있다가즈아', profit: '+15.1%' },
    { rank: '6위', nk_name: '주식이뭐지', profit: '+12.7%' },
    { rank: '7위', nk_name: '신사임당999장', profit: '+8.3%' },
    { rank: '8위', nk_name: '주식조식', profit: '+6.9%' },
  ];

  return <Ticker info={peopleRank} str="best" />;
};

export default BestRank;
