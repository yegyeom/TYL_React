import React from 'react';
import AllTab from './container/AllTab';
import StockTab from './container/StockTab';
import CoinTab from './container/CoinTab';
import DepositTab from './container/DepositTab';
import GoldTab from './container/GoldTab';
import EstateTab from './container/EstateTab';

const RankingBox = ({ id, isPc }) => {
  function SelectedItem() {
    if (id == 'all') {
      return <AllTab isPc={isPc} />;
    } else if (id == 'stock') {
      return <StockTab isPc={isPc} />;
    } else if (id == 'coin') {
      return <CoinTab isPc={isPc} />;
    } else if (id == 'deposit') {
      return <DepositTab isPc={isPc} />;
    } else if (id == 'gold') {
      return <GoldTab isPc={isPc} />;
    } else {
      return <EstateTab isPc={isPc} />;
    }
  }

  return (
    <>
      <SelectedItem />
    </>
  );
};

export default RankingBox;
