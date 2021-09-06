import React from 'react';

const RankFrame = ({ info, str }) => {
  const { nickname, ranking } = info;

  let sign = '';
  let data;
  if (str == 'total-asset') {
    const { asset } = info;
    sign = ' TYL';
    data = asset;
  } else {
    const { profit } = info;
    sign = '%';
    data = profit;
  }

  function Rank_123() {
    if (ranking == '1') {
      return <div className="gold">{ranking}위</div>;
    } else if (ranking == '2') {
      return <div className="silver">{ranking}위</div>;
    } else if (ranking == '3') {
      return <div className="bronze">{ranking}위</div>;
    } else {
      return <div>{ranking}위</div>;
    }
  }

  return (
    <ul className="ranking-list">
      <div className="list-text">
        <Rank_123 />
      </div>
      <div className="list-text">{nickname}</div>
      <div className="list-text">
        {data}
        {sign}
      </div>
    </ul>
  );
};

export default RankFrame;
