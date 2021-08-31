import React, { useState } from 'react';
import Category from './components/Category.js';
import ItemList from './components/ItemList/index.js';
import Chart from './components/Chart/index.js';
import Prediction from './components/Prediction/index.js';
import Trade from './components/Trade/index.js';

const index = () => {

    const [selectedItem, setSelectedItem] = useState();



    const getItem = (item) => {
        setSelectedItem(item);
    }

    return (
        <>
            <Category></Category>
            <ItemList getItem={getItem}></ItemList>
            <Chart ></Chart>
            <Prediction></Prediction>
            <Trade sendItem={selectedItem}></Trade>
            <div id="empty-space"></div>
        </>
    );
};

export default index;