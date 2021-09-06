import React, { useState, useEffect } from 'react';

const Category = props => {
  const [selected, setSelected] = useState('stock');

  const onClick = e => {
    setSelected(e.target.id);
    console.log('[category]클릭발생', e.target.id);
    console.log(e.target.id);
    props.getcategory(e.target.id);
  };

  useEffect(() => {
    console.log('[category]useEffect', selected);
  }, [selected]);

  return (
    <div className="category-container" id={props.isPc ? null : 'm'}>
      <div id={props.isPc ? 'category-div' : 'category-div-m'}>
        <div
          className={
            selected == 'stock'
              ? props.isPc
                ? 'selected-category'
                : 'selected-category-m'
              : props.isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="stock"
          onClick={onClick}
          style={props.isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          주식
        </div>
        <div
          className={
            selected == 'coin'
              ? props.isPc
                ? 'selected-category'
                : 'selected-category-m'
              : props.isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="coin"
          onClick={onClick}
          style={props.isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          암호화폐
        </div>
        <div
          className={
            selected == 'deposit'
              ? props.isPc
                ? 'selected-category'
                : 'selected-category-m'
              : props.isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="deposit"
          onClick={onClick}
          style={props.isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          예·적금
        </div>
        <div
          className={
            selected == 'realestate'
              ? props.isPc
                ? 'selected-category'
                : 'selected-category-m'
              : props.isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="realestate"
          onClick={onClick}
          style={props.isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          부동산
        </div>
        <div
          className={
            selected == 'gold'
              ? props.isPc
                ? 'selected-category'
                : 'selected-category-m'
              : props.isPc
              ? 'unSelected-category'
              : 'unSelected-category-m'
          }
          id="gold"
          onClick={onClick}
          style={props.isPc ? { padding: '0px 20px' } : { padding: ' 7px 12px' }}
        >
          금
        </div>
      </div>
    </div>
  );
};

export default Category;
