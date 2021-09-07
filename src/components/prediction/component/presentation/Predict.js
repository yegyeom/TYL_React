import React, { useState } from 'react';
import SearchForm from './SearchForm';
import PredictList from './PredictList';
import SearchFilter from './SearchFilter';

const Predict = ({ info, isPc }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <ul className="prediction-container" id={isPc ? null : 'm'}>
      <SearchForm onSubmit={onSubmit} onChangeInput={onChangeInput} inputValue={inputValue} />
      <div className="prediction-textbox">
        <div id="prediction-title-text">
          TYL만의 <span id="prediction-title-spantext">'AI주가예측'</span> 으로
        </div>
        <div id="prediction-title-text">더 나은 투자를 경험해보세요!</div>
        <div id="prediction-explain-text" style={{ marginTop: '2%' }}>
          <span id="prediction-name-text">RF</span> 예측이란? 베이스 모델로 의사결정트리를 사용한
          모델입니다.
        </div>
        <div id="prediction-explain-text">
          <span id="prediction-name-text">XGBoost</span> 예측이란? Gradient Boosting 알고리즘을
          사용한 모델입니다.
        </div>
        <div id="prediction-explain-text" style={{ marginBottom: '8%', color: '#00000080' }}>
          TYL만의 자체 AI 예측 값이므로 TYL의 서비스에서 참고용으로만 사용하시길 바랍니다.
        </div>
      </div>
      <div className="prediction-category-box">
        <ul id="prediction-category-text1">평균</ul>
        <ul id="prediction-category-text2">RF</ul>
        <ul id="prediction-category-text3">XGBoost</ul>
      </div>
      {inputValue.length <= 0 ? (
        <PredictList info={info} />
      ) : (
        <SearchFilter info={info} inputValue={inputValue} />
      )}
    </ul>
  );
};

export default Predict;
