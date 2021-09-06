import React, { useState, useEffect } from 'react';
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
  const [category, setCategory] = useState();

  const getItem = item => {
    setSelectedItem(item);
  };

  const getcategory = get_category => {
    console.log('[investment index]useEffect', get_category);
    setCategory(get_category);
  };

  return (
    <>
      <Category isPc={isPc} getcategory={getcategory}></Category>
      <ItemList isPc={isPc} getItem={getItem} category={category}></ItemList>
      <Chart isPc={isPc} sendItem={selectedItem} category={category}></Chart>
      <Prediction isPc={isPc} sendItem={selectedItem}></Prediction>
      <Trade isPc={isPc} sendItem={selectedItem}></Trade>
      <div id="empty-space"></div>
    </>
  );
};

export default index;
