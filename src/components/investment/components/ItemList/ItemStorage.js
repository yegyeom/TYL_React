import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trade from '../Trade/index.js';

const ItemStorage = props => {
  const [stock, setStock] = useState([]);
  const [coin, setCoin] = useState([]);
  const [N_Scroll, setN_Scroll] = useState(1);
  const [selected, setSelected] = useState(false);
  const [category, setCategory] = useState('stock');
  var cnt = 0;

  useEffect(() => {
    axios.get('/api/coin/real-data').then(res => {
      setCoin(
        res.data.map((item, i) => {
          return { ...item, rate: ((item.endValue - item.startValue) / item.startValue) * 100 };
        }),
      );
    });
    axios.get('/stock/real-data').then(res => {
      props.getItem(res.data[0]);
      setStock(res.data);
    });

    let interval = setInterval(getItem, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (props.category == 'stock') {
      setCategory('stock');
      setSelected(false);
    } else if (props.category == 'coin') {
      setCategory('coin');
      setSelected(false);
    }
  }, [props.category]);

  useEffect(() => {
    if (category == 'stock') {
      props.getItem(stock[0]);
    } else if (category == 'coin') {
      props.getItem(coin[0]);
    }
  }, [category]);

  useEffect(() => {
    console.log('category 바뀌었다 ==> ', category);
    // getItem();
  }, [category]);

  const getItem = () => {
    axios.get('/api/coin/real-data').then(res => {
      setCoin(
        res.data.map((item, i) => {
          return { ...item, rate: ((item.endValue - item.startValue) / item.startValue) * 100 };
        }),
      );
    });
    axios.get('/stock/real-data').then(res => {
      setStock(res.data);
    });
  };

  const fluctuationCal = (value, rate) => {
    let prevValue = value / (1 + rate / 100);
    let result = value - prevValue;

    return Math.round(result / 10) * 10;
  };

  const onScroll = e => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
      setN_Scroll(N_Scroll + 1);
    }
  };

  const onClick = item => {
    setSelected(true);
    props.getItem(item);
  };

  const allResult = items => {
    cnt += 1;

    return items.map((item, index) => {
      if (index < N_Scroll * 50) {
        const positive = item.rate > 0 ? true : false;
        return (
          <div
            className="item"
            id="item-container"
            key={index}
            onClick={() => {
              onClick(item, item.name, item.value);
            }}
          >
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
              <div
                id="item-changedprice"
                style={positive > 0 ? { color: '#EB5374' } : { color: '#5673EB' }}
              >
                {positive > 0 ? '+' : ''}
                {category == 'stock'
                  ? parseInt(fluctuationCal(item.value, item.rate)).toLocaleString('ko-KR')
                  : parseInt(item.endValue - item.startValue).toLocaleString('ko-KR')}
              </div>
              <div
                id="item-changedpercent"
                style={positive > 0 ? { color: '#EB5374' } : { color: '#5673EB' }}
              >
                ({item.rate.toFixed(5)}%)
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const filteredResult = items => {
    let newItems = items.filter(item => item.name.includes(props.inputValue));
    return newItems.map((item, index) => {
      if (index < N_Scroll * 50) {
        const positive = item.rate > 0 ? true : false;
        return (
          <div
            className="item"
            id="item-container"
            key={index}
            onClick={() => {
              onClick(item, item.name, item.value);
            }}
          >
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
              <div
                id="item-changedprice"
                style={positive > 0 ? { color: '#EB5374' } : { color: '#5673EB' }}
              >
                {positive > 0 ? '+' : ''}
                {parseInt(fluctuationCal(item.value, item.rate)).toLocaleString('ko-KR')}
              </div>
              <div
                id="item-changedpercent"
                style={positive > 0 ? { color: '#EB5374' } : { color: '#5673EB' }}
              >
                ({item.rate.toFixed(2)}%)
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div id="items-container" onScroll={onScroll}>
      {props.inputValue.length <= 0
        ? category == 'stock'
          ? allResult(stock)
          : allResult(coin)
        : category == 'stock'
        ? filteredResult(stock)
        : filteredResult(coin)}
    </div>
  );
};

export default ItemStorage;
