import React, { useState } from 'react';
import Category from './components/Category.js';
import ItemList from './components/ItemList/index.js';
import Chart from './components/Chart/index.js';
import Prediction from './components/Prediction/index.js';
import Trade from './components/Trade/index.js';
import { useMediaQuery } from 'react-responsive';

const index = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const [selectedItem, setSelectedItem] = useState();

  const getItem = item => {
    setSelectedItem(item);
  };

  return (
    <>
      <Category isPc={isPc}></Category>
      <ItemList isPc={isPc} getItem={getItem}></ItemList>
      <Chart isPc={isPc} sendItem={selectedItem}></Chart>
      <Prediction isPc={isPc} sendItem={selectedItem}></Prediction>
      <Trade isPc={isPc} sendItem={selectedItem}></Trade>
      <div id="empty-space"></div>
    </>
  );
};

export default index;
