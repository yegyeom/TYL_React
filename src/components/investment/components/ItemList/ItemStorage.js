import React from 'react';
//https://search.pstatic.net/sunny/?src=https%3A%2F%…%2F_images%2Ffavicon.ico&type=f30_30_png_expire24 삼성이미지

const ItemStorage = () => {

    const [Items, setItem] = React.useState([
        {
            id: '1',
            name: '삼성전자',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/12/22/04/28/facebook-1924510_960_720.png',
            price: 79200,
            changedPrice: 4580,
            changedpercent: 5.1,
        },
        {
            id: '2',
            name: '엘지',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/12/22/04/28/facebook-1924510_960_720.png',
            price: 79200,
            changedPrice: 4580,
            changedpercent: 5.1,
        },
    ]);

    return (
        <>
            {Items.map((item, index) => {
                return (
                    < div className="item" id="item-container" key={item.id} >

                        <div className="item" id="item-img">
                            <img className="item" src={item.imageUrl} alt={item.name} />
                        </div>

                        <div className="item" id="item-name">
                            <p className="item">{item.name}</p>
                        </div>

                        <div className="item" id="item-price">
                            {item.price.toLocaleString('ko-KR')} TYL
                        </div>

                        <div className="item" id="item-changed">
                            <div id="item-changedprice">+{item.changedPrice.toLocaleString('ko-KR')}</div>
                            <div id="item-changedpercent">({item.changedpercent}%)</div>
                        </div>


                    </div>
                );
            })}

        </>
    );

};

export default ItemStorage;
