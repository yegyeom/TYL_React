import React, { useState, useEffect } from 'react';

const Prediction = props => {
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    setSelectedItem(props.sendItem);
  }, [props.sendItem]);

  const [Result, setResult] = React.useState([
    {
      name: '평균',
      valuePercent: 5.1,
    },
    {
      name: 'RF',
      valuePercent: 2.0,
    },
    {
      name: 'XGBoost',
      valuePercent: 11.8,
    },
    {
      name: 'RNN',
      valuePercent: 4.21,
    },
  ]);

  return (
    <>
      <div className="prediction-container">
        <div id="prediction-top-text">
          {selectedItem != null ? selectedItem.name : '종목'}에 대한 AI예측 결과를 확인해보세요!
        </div>
        <div className="prediction-item-container">
          {Result.map((result, idx) => {
            return (
              <div id="prediction-item" key={idx}>
                <div id="prediction-item-name">{result.name}</div>
                <div id="prediction-item-valuePercent">+{result.valuePercent}%</div>
              </div>
            );
          })}
        </div>
        {/* <div id="prediction-bottom-text">위 예측은 TYL 자체 AI 예측입니다</div> 넣을지 말지 고민*/}
      </div>
    </>
  );
};

export default Prediction;
