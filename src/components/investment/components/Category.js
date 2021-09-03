import React, { useState } from 'react';

const Category = () => {

    const [selected, setSelected] = useState("stock")


    const onClick = (e) => {
        setSelected(e.target.id);
        console.log("클릭발생", e);
        console.log(e.target.id);
    }


    return (


        <div className="category-container">
            <div id="category-div">
                <div className={selected == "stock" ? "selected-category" : "unSelected-category"} id="stock" onClick={onClick}> 주식</div>
                <div className={selected == "coin" ? "selected-category" : "unSelected-category"} id="coin" onClick={onClick}>암호화폐</div>
                <div className={selected == "deposit" ? "selected-category" : "unSelected-category"} id="deposit" onClick={onClick}>예·적금</div>
                <div className={selected == "realestate" ? "selected-category" : "unSelected-category"} id="realestate" onClick={onClick}>부동산</div>
                <div className={selected == "gold" ? "selected-category" : "unSelected-category"} id="gold" onClick={onClick}>금</div>
            </div>
        </div >
    );
};


export default Category;
