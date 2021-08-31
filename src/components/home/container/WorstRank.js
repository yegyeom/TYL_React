import React from 'react';
import Ticker from '../presentational/Ticker';
import axios from 'axios';
import '../../../styles/sass/main.css';

const WorstRank = () => {
  // https://testyourlife.kro.kr/preday-history
  axios.get('rank/preday-history').then(res => {
    console.log(res.data);
  });

  const peopleRank = [
    { rank: '1위', nk_name: '김병준', profit: '-41.5%' },
    { rank: '2위', nk_name: '임대호', profit: '-38.7%' },
    { rank: '3위', nk_name: '김동규', profit: '-35.0%' },
    { rank: '4위', nk_name: '김태성', profit: '-29.3%' },
    { rank: '5위', nk_name: '김예겸', profit: '-28.4%' },
    { rank: '6위', nk_name: '허예림', profit: '-23.2%' },
    { rank: '7위', nk_name: '배지영', profit: '-18.0%' },
    { rank: '8위', nk_name: '김재우', profit: '-14.6%' },
  ];

  return <Ticker info={peopleRank} str="worst" />;
};

export default WorstRank;
