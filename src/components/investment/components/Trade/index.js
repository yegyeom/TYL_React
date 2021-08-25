import React from 'react';

const Trade = () => {
    // https://image.flaticon.com/icons/png/512/5381/5381292.png
    //https://image.flaticon.com/icons/png/512/5396/5396865.png 판매
    return (<>
        <div className="trade-container">
            <div className="trade-item" id="trade-purchase"><div className="trade-img"><img className="trade-item" src="https://image.flaticon.com/icons/png/512/5381/5381292.png" /></div><span>구매하기</span></div>
            <div className="trade-item" id="trade-sell"><div className="trade-img"><img className="trade-item" src="https://image.flaticon.com/icons/png/512/5396/5396865.png" /></div><span>판매하기</span></div>
        </div>
    </>);
};


export default Trade;