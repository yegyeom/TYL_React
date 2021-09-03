import React from 'react';
import RankFrame from './RankFrame';

const RankList = ({ info, str }) => {
  const List = info.map((people, idx) => <RankFrame key={idx} info={people} str={str} />);

  return <div>{List}</div>;
};

export default RankList;
