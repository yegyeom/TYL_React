import React from 'react';
import '../../../styles/sass/main.css';

const RankFrame = ({ info }) => {
  const { nickname, asset, ranking } = info;

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
    <>
      <ul className="ranking-list">
          <div className="list-text">
            <Rank_123 />
          </div>
        <div className="list-text">{nickname}</div>
        <div className="list-text">{asset} TYL</div>
      </ul>
    </>
  );
};

export default RankFrame;
