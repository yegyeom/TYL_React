import React from 'react';

const SearchFilter = ({ info, inputValue }) => {
  let newItems = info.filter((item, idx) => item.name.includes(inputValue));

  function ProfitColor({ name }) {
    if (name > 0) {
      return <div style={{ color: '#EB5374' }}>{name}%</div>;
    } else if (name < 0) {
      return <div style={{ color: '#5673EB' }}>{name}%</div>;
    } else {
      return <div>{name}%</div>;
    }
  }

  if (newItems.length == 0) {
    return (
      <div className="serach-available">
        <div>검색한 종목이 존재하지 않습니다</div>
      </div>
    );
  }

  return newItems.map((item, idx) => {
    //   if (idx < N_Scroll * 50) {
    //const positive = item.rate > 0 ? true : false;
    console.log(info);
    return (
      <div className="predict-box">
      <ul
        className="predict-name-text"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        {item.name}
      </ul>
      <ul
        className="predict-listbox"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        <ProfitColor name={item.average} />
      </ul>
      <ul
        className="predict-listbox"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        <ProfitColor name={item.rf} />
      </ul>
      <ul
        className="predict-listbox"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        <ProfitColor name={item.xgb} />
      </ul>
    </div>
    );
    //   }
  });
};

export default SearchFilter;
