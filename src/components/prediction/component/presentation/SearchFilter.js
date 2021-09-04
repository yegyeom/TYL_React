import React from 'react';

const SearchFilter = ({ info, inputValue }) => {
  let newItems = info.filter(item => item.name.includes(inputValue));
  let cnt = 0;

  if (newItems.length == 0) {
    return (
      <div className="predict-listbox">
        <div>검색한 종목이 존재하지 않습니다</div>
      </div>
    );
  }
  return newItems.map((item, idx) => {
    //   if (idx < N_Scroll * 50) {
    //const positive = item.rate > 0 ? true : false;
    return (
      <>
        <div>
          <div className="predict-name-text">{item.name}</div>
        </div>
        <ul className="predict-listbox">
          <div id="predict-profit-text">{item.average}%</div>
          <div id="predict-profit-text">{item.rf}%</div>
          <div id="predict-profit-text">{item.xgb}%</div>
        </ul>
      </>
    );
    //   }
  });
};

export default SearchFilter;
