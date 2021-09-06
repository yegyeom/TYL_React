import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SwitchTab from './SwitchTab';

const Category = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  const [selected, setSelected] = useState('all');

  const onClick = e => {
    setSelected(e.target.id);
  };

  return (
    <>
      <ul className="category-container" id={isPc ? null : 'm'}>
        <div
          className={selected == 'all' ? 'selected-category' : 'unselected-category'}
          style={
            isPc
              ? null
              : selected == 'all'
              ? {
                  display: 'inline',
                  fontWeight: 'normal',
                  backgroundColor: '#5673eb',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  textDecorationLine: 'none',
                }
              : {
                  display: 'inline',
                  fontWeight: 'normal',
                  color: '#c2c2c2',
                  cursor: 'pointer',
                  fontSize: '12px',
                  paddingTop: '7px',
                  paddingBottom: '7px'
                }
          }
          id="all"
          onClick={onClick}
        >
          전체
        </div>
        <div
          className={selected == 'stock' ? 'selected-category' : 'unselected-category'}
          style={
            isPc
              ? null
              : selected == 'stock'
              ? {
                  display: 'inline',
                  fontWeight: 'normal',
                  backgroundColor: '#5673eb',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  textDecorationLine: 'none',
                }
              : {
                  display: 'inline',
                  fontWeight: 'normal',
                  color: '#c2c2c2',
                  cursor: 'pointer',
                  fontSize: '12px',
                  paddingTop: '7px',
                  paddingBottom: '7px'
                }
          }
          id="stock"
          onClick={onClick}
        >
          주식
        </div>
        <div
          className={selected == 'coin' ? 'selected-category' : 'unselected-category'}
          style={
            isPc
              ? null
              : selected == 'coin'
              ? {
                  display: 'inline',
                  fontWeight: 'normal',
                  backgroundColor: '#5673eb',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  textDecorationLine: 'none',
                }
              : {
                  display: 'inline',
                  fontWeight: 'normal',
                  color: '#c2c2c2',
                  cursor: 'pointer',
                  fontSize: '11px',
                  paddingTop: '7px',
                  paddingBottom: '7px'
                }
          }
          id="coin"
          onClick={onClick}
        >
          암호화폐
        </div>
        <div
          className={selected == 'deposit' ? 'selected-category' : 'unselected-category'}
          style={
            isPc
              ? null
              : selected == 'deposit'
              ? {
                  display: 'inline',
                  fontWeight: 'normal',
                  backgroundColor: '#5673eb',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  textDecorationLine: 'none',
                }
              : {
                  display: 'inline',
                  fontWeight: 'normal',
                  color: '#c2c2c2',
                  cursor: 'pointer',
                  fontSize: '11px',
                  paddingTop: '7px',
                  paddingBottom: '7px'
                }
          }
          id="deposit"
          onClick={onClick}
        >
          예·적금
        </div>
        <div
          className={selected == 'gold' ? 'selected-category' : 'unselected-category'}
          style={
            isPc
              ? null
              : selected == 'gold'
              ? {
                  display: 'inline',
                  fontWeight: 'normal',
                  backgroundColor: '#5673eb',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  textDecorationLine: 'none',
                }
              : {
                  display: 'inline',
                  fontWeight: 'normal',
                  color: '#c2c2c2',
                  cursor: 'pointer',
                  fontSize: '12px',
                  paddingTop: '7px',
                  paddingBottom: '7px'
                }
          }
          id="gold"
          onClick={onClick}
        >
          금
        </div>
        <div
          className={selected == 'estate' ? 'selected-category' : 'unselected-category'}
          style={
            isPc
              ? null
              : selected == 'estate'
              ? {
                  display: 'inline',
                  fontWeight: 'normal',
                  backgroundColor: '#5673eb',
                  color: '#fff',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  textDecorationLine: 'none',
                }
              : {
                  display: 'inline',
                  fontWeight: 'normal',
                  color: '#c2c2c2',
                  cursor: 'pointer',
                  fontSize: '11px',
                  paddingTop: '7px',
                  paddingBottom: '7px'
                }
          }
          id="estate"
          onClick={onClick}
        >
          부동산
        </div>
      </ul>

      <SwitchTab id={selected} isPc={isPc} />
    </>
  );
};

export default Category;
