import React, { useState } from 'react';
import Category from './components/Category.js';
import ItemList from './components/ItemList/index.js';
import Chart from './components/Chart/index.js';
import Prediction from './components/Prediction/index.js';
import Trade from './components/Trade/index.js';

const index = () => {
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
      <Category getcategory={getcategory}></Category>
      <ItemList getItem={getItem} category={category}></ItemList>
      <Chart sendItem={selectedItem} category={category}></Chart>
      <Prediction sendItem={selectedItem}></Prediction>
      <Trade sendItem={selectedItem}></Trade>
      <div id="empty-space"></div>
    </>
  );
};

export default index;
