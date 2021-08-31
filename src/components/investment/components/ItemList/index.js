import React, { useState } from 'react';
import ItemStorage from './ItemStorage.js';

const ItemList = (props) => {

    const getItem = (item) => {
        props.getItem(item);
    }

    const [value, setValue] = React.useState("");
    const inputRef = React.useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };


    const SearchForm = (
        <div>
            <form id="itemlist-searchform" onSubmit={onSubmit}>
                <input ref={inputRef} type="text" value={value} placeholder="Search.." autoFocus onChange={onChangeInput} />
            </form>
        </div>
    );

    return (
        <div className="itemlist-container">
            {SearchForm}
            <ItemStorage getItem={getItem}></ItemStorage>
        </div >
    );
};


export default ItemList;
