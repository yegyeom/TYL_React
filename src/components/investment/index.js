import React from 'react';
import Category from './components/Category.js';
import ItemList from './components/ItemList/index.js';
import Chart from './components/Chart/index.js';
import Prediction from './components/Prediction/index.js';
import Trade from './components/Trade/index.js';

const index = () => {
    return (
        <>
            <h1>Investment 페이지 입니다</h1>
            <Category></Category>
            <ItemList></ItemList>
            <Chart></Chart>
            <Prediction></Prediction>
            <Trade></Trade>
            <div id="empty-space"></div>
        </>
    );
};

export default index;