import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import '../../../../styles/sass/main.css';

const Modal = props => {
  const { open, close, header } = props;
  const validity = useSelector(checkValidity);
  const [stockTradeBox, setStockTradeBox] = useState([]);
  const [tradeList, setTradeList] = useState([]);
  const [inProgress, setInProgress] = useState(true);

  useEffect(() => {
    if (!header) return;
    if (validity) {
      setInProgress(true);
      axios.get('asset').then(res => {
        var arr = [];
        res.data.stock.stockList.map((list, idx) => {
          if (list.name === header) {
            arr.push(list.code); //클릭한 종목 코드
          }
        });

        axios.get(`asset/transaction?code=${arr[0]}&type=stock`).then(res => {
          var data = {
            title: res.data.history[0].name,
            order: [],
          };

          res.data.history.map(history => {
            var detail = {
              //주문내역 하나씩
              date: history.date,
              trading: history.type,
              qty: history.amount,
              one: history.price,
              total: history.amount * history.price,
            };
            data.order.push(detail);
          });
          setStockTradeBox(data);
          setInProgress(false);
        });
      });
    }
  }, [header]);

  useEffect(() => {
    if (inProgress) return;
    const TradeList = stockTradeBox.order.map((list, idx) => {
      var date = new Date(list.date);
      var res =
        date.getFullYear() +
        '-' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + date.getDate()).slice(-2);

      return (
        <div className="detail-trade-list" key={idx}>
          <div className="gang">
            <ul className="detail-trade-left">
              <li style={list.trading === 'BUY' ? { color: '#EB5374' } : { color: '#5673EB' }}>
                {list.trading === 'BUY' ? '매수' : '매도'}
              </li>
              <li style={{ paddingTop: '0px' }}>{res}</li>
            </ul>
            <ul className="detail-trade-right">
              <li>{list.total.toLocaleString('ko-KR')} TYL</li>
              <li style={{ paddingTop: '0px' }}>
                {list.qty}주 {list.one.toLocaleString('ko-KR')} TYL
              </li>
            </ul>
          </div>
        </div>
      );
    });
    setTradeList(TradeList);
  }, [inProgress]);

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header style={{ paddingLeft: '60px', fontSize: '16px' }}>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          {tradeList}
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
