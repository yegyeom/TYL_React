import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prediction = props => {
  const [selectedItem, setSelectedItem] = useState();
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
  ]);

  useEffect(() => {
    setSelectedItem(props.sendItem);
  }, [props.sendItem]);

  useEffect(() => {
    console.log('Result  ===>', Result);
  }, [Result]);

  useEffect(() => {
    console.log('셀렉티드 ==> ', selectedItem);
    if (selectedItem != null) {
      axios.get('/api/prediction').then(res => {
        res.data.prediction.rf.map((item, idx) => {
          console.log('먼데 ==> ', JSON.stringify(selectedItem.code));
          console.log('아이템 =>', '/br', item.code, '셀렉티드 아이템 =>', selectedItem.code);

          if (item.code == selectedItem.code) {
            console.log('드디어');
            console.log(res.data.prediction.xgb[idx]);
            setResult([
              {
                name: '평균',
                valuePercent:
                  (res.data.prediction.xgb[idx].rate + res.data.prediction.rf[idx].rate) / 2,
              },
              {
                name: 'RF',
                valuePercent: res.data.prediction.rf[idx].rate,
              },
              {
                name: 'XGBoost',
                valuePercent: res.data.prediction.xgb[idx].rate,
              },
            ]);
          }
        });
        console.log('Prediction ==> ', res.data.prediction.rf);
      });
    }
  }, [selectedItem]);

  return (
    <>
      <div className="prediction-container" id={props.isPc ? null : 'm'}>
        <div id="prediction-top-text">
          {selectedItem != null ? selectedItem.name : '종목'}에 대한 AI예측 결과를 확인해보세요!
        </div>
        <div className="prediction-item-container">
          {Result.map((result, idx) => {
            return (
              <div id="prediction-item" key={idx}>
                <div id="prediction-item-name">{result.name}</div>
                <div
                  id={
                    result.valuePercent >= 0
                      ? 'prediction-item-increase'
                      : 'prediction-item-decrease'
                  }
                >
                  {result.valuePercent > 0 ? '+' : null}
                  {result.valuePercent}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Prediction;
