import React from 'react';
import Frame from './RankFrame';

const FrameList = ({ info }) => {
  const list = info.map(people => <Frame info={people} key={people.name} />);
  return <div>{list}</div>;
};

export default FrameList;
