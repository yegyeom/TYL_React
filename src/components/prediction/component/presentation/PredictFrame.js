import React from 'react';

const PredictFrame = ({ info }) => {
  const { name, average, rf, xgb } = info;

  return (
    <>
      <div>
        <div className="predict-name-text">{name}</div>
      </div>
      <ul className="predict-listbox">
        <div id="predict-profit-text">{average}%</div>
        <div id="predict-profit-text">{rf}%</div>
        <div id="predict-profit-text">{xgb}%</div>
      </ul>
    </>
  );
};

export default PredictFrame;
