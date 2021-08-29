import React from 'react';
import '../../../styles/sass/main.css';

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
    <ul className="frameList">
      <div>
        <Rank_123 />
      </div>
      <div>{nk_name}</div>
      <div>{asset}</div>
    </ul>
  );
};

export default RankFrame;
