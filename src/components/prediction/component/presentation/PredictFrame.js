import React from 'react';

const PredictFrame = ({ info }) => {
  const { name, average, rf, xgb } = info;

  function ProfitColor({ name }) {
    if (name > 0) {
      return <div style={{ color: '#EB5374' }}>{name}%</div>;
    } else if (name < 0) {
      return <div style={{ color: '#5673EB' }}>{name}%</div>;
    } else {
      return <div>{name}%</div>;
    }
  }

  return (
    <div className="predict-box">
      <ul
        className="predict-name-text"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        {name}
      </ul>
      <ul
        className="predict-listbox"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        <ProfitColor name={average} />
      </ul>
      <ul
        className="predict-listbox"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        <ProfitColor name={rf} />
      </ul>
      <ul
        className="predict-listbox"
        style={
          info.order % 2 != 0 ? { backgroundColor: '#e1e1e185' } : { backgroundColor: '#fafafa' }
        }
      >
        <ProfitColor name={xgb} />
      </ul>
    </div>
  );
};

export default PredictFrame;
