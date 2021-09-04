import React from 'react';
import search_img from '../../../../styles/images/search_icon.png';

const SearchForm = ({ onSubmit, onChangeInput, inputValue }) => {
  return (
    <>
      <form className="searchform-container" onSubmit={onSubmit}>
        <img className="search-image" src={search_img}></img>
        <input
          className="searchform-input"
          type="text"
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={onChangeInput}
          //autoFocus
        ></input>
      </form>
    </>
  );
};

export default SearchForm;
