import React from 'react';
import RankFrame from './RankFrame';

const RankList = ({ info }) => {
  const list = info.map(people => <RankFrame key={people.nk_name} info={people} />);

  return <div>{list}</div>;
};

export default RankList;
