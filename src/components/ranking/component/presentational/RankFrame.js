import React from 'react';

const RankFrame = ({ info }) => {
  const { rank, nk_name, asset } = info;

  function Rank_123() {
    if (rank == '1위') {
      return <div className="gold">{rank}</div>;
    } else if (rank == '2위') {
      return <div className="silver">{rank}</div>;
    } else if (rank == '3위') {
      return <div className="bronze">{rank}</div>;
    } else {
      return <div>{rank}</div>;
    }
  }

  return (
    <ul className="ranking-list">
      <div className="list-text">
        <Rank_123 />
      </div>
      <div className="list-text">{nk_name}</div>
      <div className="list-text">{asset}</div>
    </ul>
  );
};

export default RankFrame;
