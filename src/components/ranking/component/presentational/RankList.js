import React from 'react';
import RankFrame from './RankFrame';

const RankList = ({ info }) => {
  const List = info.map(people => <RankFrame key={people.nk_name} info={people} />);

  return <div>{List}</div>;
};

export default RankList;
