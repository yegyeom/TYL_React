import React, { useState, useRef, useEffect } from 'react';
import ItemStorage from './ItemStorage.js';
import search_img from '../../../../styles/images/search_icon.png';

const ItemList = props => {
  const todayTime = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;
    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);
    var timeString = hours + ':' + minutes + ':' + seconds;

    return dateString + ' ' + timeString;
  };

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
    <div className="gang2">
      <div className="time" id="invest-time">
        {todayTime().slice(0, 9)}
        <span>{todayTime().slice(9, 12)}</span>
        <span>{todayTime().slice(12, 19)}</span>
        <span> 기준</span>
      </div>
      <div id="gang4">
        <form id="itemlist-searchform" onSubmit={onSubmit}>
          <img className="itemlist-searchform-image" src={search_img}></img>
          <input
            id="itemlist-searchform-input"
            type="text"
            value={inputValue}
            placeholder="종목을 입력하세요!"
            onChange={onChangeInput}
          ></input>
        </form>
      </div>
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
