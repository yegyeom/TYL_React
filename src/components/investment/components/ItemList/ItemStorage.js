import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trade from '../Trade/index.js';
//https://search.pstatic.net/sunny/?src=https%3A%2F%…%2F_images%2Ffavicon.ico&type=f30_30_png_expire24 삼성이미지
// 라이프 사이클,
// useeffect 렌더링 전 , 후 표시?
// 렌더링 되기 전 데이터를 받아와야 함
const ItemStorage = (props) => {

    //이름, 코드?(필요한가), 값, rate만 가져올 수 있도록한다.
    const [Items, setItem] = useState([]);
    const [N_Scroll, setN_Scroll] = useState(1);
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        // updateData() => setInterval 10초마다 장이열리는 시간이면 ㅋㅋ
        axios.get('/stock/real-data').then(res => {
            console.log(res.data);
            let newArr = res.data.map((item, i) => {
                return { item };
            });
            console.log("res.data 입니다");
            console.log(res.data);
            setItem(res.data);
        });
    }, []);

    const fluctuationCal = (value, rate) => {
        let prevValue = value / (1 + (rate / 100))
        return value - prevValue;
    }

    const onScroll = (e) => {
        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight * 0.9) {
            setN_Scroll(N_Scroll + 1)
        }
        console.log(N_Scroll);

    }

    const onClick = (item) => {
        props.getItem(item);
    }



    return (
        <div id="items-container" onScroll={onScroll}>
            {
                Items.map((item, index) => {
                    if (index < N_Scroll * 50) {

                        const positive = item.rate > 0 ? true : false
                        return (
                            < div className="item" id="item-container" key={item.id} onClick={() => { onClick(item, item.name, item.value); }
                            } >

                                <div className="item" id="item-img">
                                    {/* <img className="item" src={item.imageUrl} alt={item.name} /> */}
                                </div>

                                <div className="item" id="item-name">
                                    <p className="item">{item.name}</p>
                                </div>

                                <div className="item" id="item-price">
                                    {parseInt(item.value).toLocaleString('ko-KR')} TYL
                                </div>

                                <div className="item" id="item-changed">
                                    <div id="item-changedprice" style={positive > 0 ? { color: '#FF0000' } : { color: '#001AFF' }}>{positive > 0 ? "+" : ""}{parseInt(fluctuationCal(item.value, item.rate)).toLocaleString('ko-KR')}</div>
                                    <div id="item-changedpercent" style={positive > 0 ? { color: '#FF0000' } : { color: '#001AFF' }}>({item.rate}%)</div>
                                </div>


                            </div>
                        );
                    }
                })
            }

        </div >
    );

};

export default ItemStorage;
