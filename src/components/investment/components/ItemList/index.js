import React, { useState, useRef, useEffect } from 'react';
import ItemStorage from './ItemStorage.js';
import search_img from '../../../../styles/images/search_icon.png';

const ItemList = props => {
  const getItem = item => {
    props.getItem(item);
  };
  const [category, setCategory] = useState();

  useEffect(() => {}, []);

  useEffect(() => {
    setCategory(props.category);
  }, [props.category]);

  const [inputValue, setInputValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  // https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png
  const SearchForm = (
    <div>
      <form id="itemlist-searchform" onSubmit={onSubmit}>
        <img className="itemlist-searchform-image" src={search_img}></img>
        <input
          id="itemlist-searchform-input"
          type="text"
          value={inputValue}
          placeholder="종목을 입력하세요!"
          autoFocus
          onChange={onChangeInput}
        ></input>
      </form>
    </div>
  );

  return (
    <div className="itemlist-container" id={props.isPc ? null : 'm'}>
      {SearchForm}

      <ItemStorage getItem={getItem} inputValue={inputValue} category={category}></ItemStorage>
    </div>
  );
};

export default ItemList;
