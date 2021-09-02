import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllRank from '../presentational/AllRank';

const AllTab = () => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    axios.get('rank/asset').then(res => {
      console.log(res);
      //setRank(res.data.rank);
    });
  }, []);

  const assetList = [
    { rank: '1위', nk_name: 'KIM', asset: '400,000,000틸' },
    { rank: '2위', nk_name: 'LEE', asset: '300,000,000틸' },
    { rank: '3위', nk_name: 'LIM', asset: '200,000,000틸' },
    { rank: '4위', nk_name: 'SON', asset: '80,000,000틸' },
    { rank: '5위', nk_name: 'YUN', asset: '50,000,000틸' },
    { rank: '6위', nk_name: 'PARK', asset: '10,000,000틸' },
  ];

  const yieldList = [
    { rank: '1위', nk_name: '안녕', asset: '48.3%' },
    { rank: '2위', nk_name: '주식부자', asset: '39.2%' },
    { rank: '3위', nk_name: '호호', asset: '36.1%' },
    { rank: '4위', nk_name: '임대호', asset: '29.1%' },
    { rank: '5위', nk_name: '쀼시닝', asset: '25.8%' },
    { rank: '6위', nk_name: '시계나이', asset: '12.4%' },
  ];

  return (
    <>
      <AllRank ainfo={assetList} yinfo={yieldList} />
    </>
  );
};

export default AllTab;
