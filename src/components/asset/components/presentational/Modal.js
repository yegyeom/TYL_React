import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { checkValidity } from '../../../auth/userSlice';
import '../../../../styles/sass/main.css';

const Modal = props => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

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
        res.data.stock.stockList.map(list => {
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
    const arr = stockTradeBox.order.reverse();
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
            {isPc && (
              <>
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
              </>
            )}
            {isMobile && (
              <>
                <ul className="detail-trade-left" style={{ paddingLeft: '25px' }}>
                  <li
                    style={
                      list.trading === 'BUY'
                        ? { color: '#EB5374', fontSize: '14px' }
                        : { color: '#5673EB', fontSize: '14px' }
                    }
                  >
                    {list.trading === 'BUY' ? '매수' : '매도'}
                  </li>
                  <li style={{ paddingTop: '0px' }}>{res}</li>
                </ul>
                <ul className="detail-trade-right" style={{ marginRight: '45px' }}>
                  <li style={{ fontSize: '14px' }}>{list.total.toLocaleString('ko-KR')} TYL</li>
                  <li style={{ paddingTop: '0px' }}>
                    {list.qty}주 {list.one.toLocaleString('ko-KR')} TYL
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      );
    });
    setTradeList(TradeList);
  }, [inProgress]);

  const [N_Scroll, setN_Scroll] = useState(1);

  const onScroll = e => {
    console.log('onScroll', e);
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight * 0.6) {
      setN_Scroll(N_Scroll + 1);
    }
  };

  const showList = tradeList => {
    return tradeList.map((list, idx) => {
      if (idx < N_Scroll * 5) {
        return list;
      }
    });
  };

  const onChildClick = e => {
    e.stopPropagation();
  };

  return (
    <div onClick={close}>
      <div className={open ? 'openModal modal' : 'modal'}>
        {isPc && (
          <section style={{ width: '420px' }} onClick={onChildClick}>
            <header style={{ paddingLeft: '60px', fontSize: '16px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <div id="lists-container" onScroll={onScroll}>
              {showList(tradeList)}
            </div>
          </section>
        )}
        {isMobile && (
          <section style={{ width: '300px' }} onClick={onChildClick}>
            <header style={{ paddingLeft: '60px', fontSize: '16px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <div id="lists-container" onScroll={onScroll}>
              {showList(tradeList)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Modal;
