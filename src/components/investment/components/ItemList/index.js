import React, { useState, useRef } from 'react';
import ItemStorage from './ItemStorage.js';

const ItemList = (props) => {

    const getItem = (item) => {
        props.getItem(item);
    }

    const [inputValue, setInputValue] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };


    // https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png
    const SearchForm = (
        <div>
            <form id="itemlist-searchform" onSubmit={onSubmit}>
                {/* <img id="itemlist-searchform-img" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png" ></img> */}
                <input id="itemlist-searchform-input" type="text" value={inputValue} placeholder="Search.." autoFocus onChange={onChangeInput}>

                </input>
            </form>
        </div>
    );

    return (
        <div className="itemlist-container" >
            {SearchForm}
            <ItemStorage getItem={getItem} inputValue={inputValue} ></ItemStorage>
        </div >
    );
};


export default ItemList;
