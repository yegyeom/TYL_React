import React from 'react';
import AllTab from './container/AllTab';
import StockTab from './container/StockTab';
import CoinTab from './container/CoinTab';
import DepositTab from './container/DepositTab';
import GoldTab from './container/GoldTab';
import EstateTab from './container/EstateTab';

const RankingBox = ({ id }) => {
  function SelectedItem() {
    if (id == 'all') {
      return <AllTab />;
    } else if (id == 'stock') {
      return <StockTab />;
    } else if (id == 'coin') {
      return <CoinTab />;
    } else if (id == 'deposit') {
      return <DepositTab />;
    } else if (id == 'gold') {
      return <GoldTab />;
    } else {
      return <EstateTab />;
    }
  }

  return (
    <>
      <SelectedItem />
    </>
  );
};

export default RankingBox;
