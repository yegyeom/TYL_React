import React, { useState } from 'react';
import search_img from '../../../../styles/images/search_icon.png';
import RankList from './RankList';
import SearchFilter from './SearchFilter';

const AllRank = ({ ainfo, yinfo, props, isPc }) => {
  const [selected, setSelected] = useState('total-asset');
  const [inputValue, setInputValue] = useState('');

  // const getItem = item => {
  //   props.getItem(item);
  // };

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChangeSelectOptionHandler = e => {
    setSelected(e.target.value);
  };

  const onChangeInput = e => {
    setInputValue(e.target.value);
  };

  // 선택된 아이템에 따라 값을 비교하고 데이타를 리턴
  function Inquiries() {
    if (selected == 'total-asset') {
      return <RankList info={ainfo} str="total-asset" />;
    } else if (selected == 'yield') {
      return <RankList info={yinfo} str="yield" />;
    }
  }

  function InquiriesSearchFilter() {
    if (selected == 'total-asset') {
      return <SearchFilter info={ainfo} inputValue={inputValue} str="total-asset" />;
    } else if (selected == 'yield') {
      return <SearchFilter info={yinfo} inputValue={inputValue} str="yield" />;
    }
  }

  const SelectTag = (
    <>
      <select className="select-container" onChange={onChangeSelectOptionHandler}>
        <option className="select-option" defaultValue='default' value="total-asset">
          총자산
        </option>
        <option className="select-option" value="yield">
          수익률
        </option>
      </select>
    </>
  );

  const SearchForm = (
    <>
      <form className="searchform-container" onSubmit={onSubmit}>
        <img className="search-image" src={search_img}></img>
        <input
          className="searchform-input"
          type="text"
          placeholder="유저를 찾아보세요"
          value={inputValue}
          onChange={onChangeInput}
        ></input>
      </form>
    </>
  );

  return (
    <>
      <ul className="ranking-container" id={isPc ? null : 'm'}>
        <div>{SelectTag}</div>
        <div>{SearchForm}</div>
        <div>{inputValue.length <= 0 ? <Inquiries /> : <InquiriesSearchFilter />}</div>
      </ul>
    </>
  );
};

export default AllRank;
