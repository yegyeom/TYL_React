import React, { useState } from 'react';

const Category = ({ isPc }) => {
  const [selected, setSelected] = useState('stock');

  const onClick = e => {
    setSelected(e.target.id);
    console.log('클릭발생', e);
    console.log(e.target.id);
  };

  return (
    <div className="category-container" id={isPc ? null : 'm'}>
      <div id={isPc ? 'category-div' : 'category-div-m'}>
        <div
          className={
            selected == 'stock'
              ? isPc
                ? 'selected-category'
                : 'selected-category-m'
              : isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="stock"
          onClick={onClick}
          style={isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          주식
        </div>
        <div
          className={
            selected == 'coin'
              ? isPc
                ? 'selected-category'
                : 'selected-category-m'
              : isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="coin"
          onClick={onClick}
          style={isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          암호화폐
        </div>
        <div
          className={
            selected == 'deposit'
              ? isPc
                ? 'selected-category'
                : 'selected-category-m'
              : isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="deposit"
          onClick={onClick}
          style={isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          예·적금
        </div>
        <div
          className={
            selected == 'realestate'
              ? isPc
                ? 'selected-category'
                : 'selected-category-m'
              : isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="realestate"
          onClick={onClick}
          style={isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          부동산
        </div>
        <div
          className={
            selected == 'gold'
              ? isPc
                ? 'selected-category'
                : 'selected-category-m'
              : isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="gold"
          onClick={onClick}
          style={isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          금
        </div>
      </div>
    </div>
  );
};

export default Category;
