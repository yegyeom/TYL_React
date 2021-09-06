import React from 'react';

const SearchFilter = ({ info, inputValue, str }) => {
  let newItems = info.filter((item, idx) => item.nickname.includes(inputValue));

  function Rank_123({ item }) {
    if (item.ranking == '1') {
      return <div className="gold">{item.ranking}위</div>;
    } else if (item.ranking == '2') {
      return <div className="silver">{item.ranking}위</div>;
    } else if (item.ranking == '3') {
      return <div className="bronze">{item.ranking}위</div>;
    } else {
      return <div>{item.ranking}위</div>;
    }
  }

  if (newItems.length == 0) {
    return (
      <ul className="ranking-list">
        <div className="list-text">검색한 유저가 존재하지 않습니다</div>
      </ul>
    );
  }

  return newItems.map((item, idx) => {
    return (
      <ul className="ranking-list" key={idx}>
        <div className="list-text">
          <Rank_123 item={item} />
        </div>
        <div className="list-text">{item.nickname}</div>
        <div className="list-text">
          {str == 'total-asset' ? item.asset + ' 틸' : item.profit + '%'}
        </div>
      </ul>
    );
  });
};

export default SearchFilter;
