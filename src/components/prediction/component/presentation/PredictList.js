import React from 'react';
import PredictFrame from './PredictFrame';

const PredictList = ({ info }) => {
  const List = info.map((predict, idx) => <PredictFrame key={idx} info={predict} />);

  return <div>{List}</div>;
};

export default PredictList;
