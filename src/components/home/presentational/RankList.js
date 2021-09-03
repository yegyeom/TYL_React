import React from 'react';
import RankFrame from './RankFrame';

const RankList = ({ info }) => {
  const List = info.map((people, idx) => <RankFrame key={idx} info={people} />);

  return <div>{List}</div>;
};

export default RankList;
