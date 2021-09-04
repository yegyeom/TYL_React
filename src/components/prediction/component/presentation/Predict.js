import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PredictList from './PredictList';
import SearchFilter from './SearchFilter';

const Predict = ({ info }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <ul className="prediction-container">
        <SearchForm onSubmit={onSubmit} onChangeInput={onChangeInput} inputValue={inputValue} />
        <div className="prediction-textbox">
          <div id="prediction-title-text">
            TYL만의 <span id="prediction-title-spantext">'AI주가예측'</span> 으로
          </div>
          <div id="prediction-title-text">더 나은 투자를 경험해보세요!</div>
          <div id="prediction-explain-text" style={{ marginTop: '2%' }}>
            <span id="prediction-name-text">RF</span> 예측이란? 대표적인 앙상블 모델로서 베이스
            모델로 의사결정트리를 사용한 모델입니다.
          </div>
          <div id="prediction-explain-text" style={{ marginBottom: '5%' }}>
            <span id="prediction-name-text">XGBoost</span> 예측이란? Gradient Boosting 알고리즘을
            사용한 모델입니다.
          </div>
        </div>
        <div className="prediction-category-text">
          <span style={{ marginRight: '13.5%' }}>평균</span>{' '}
          <span style={{ marginRight: '9.5%' }}>RF</span>{' '}
          <span style={{ marginRight: '11%' }}>XGBoost</span>
        </div>
        {inputValue.length <= 0 ? (
          <PredictList info={info} />
        ) : (
          <SearchFilter info={info} inputValue={inputValue} />
        )}
      </ul>
    </>
  );
};

export default Predict;
