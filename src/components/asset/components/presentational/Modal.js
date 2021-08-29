import React from 'react';
import '../../../../styles/sass/main.css';

const Modal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, onAccept, TradeBox } = props;

  const TradeList = TradeBox.map(menu =>
    menu.title === header
      ? menu.order.map((list, idx) => (
          <div className="detail-trade-list" key={idx}>
            <ul className="detail-trade-left">
              <li style={list.trading === '매수' ? { color: 'red' } : { color: 'blue' }}>
                {list.trading}
              </li>
              <li style={{ paddingTop: '0px' }}>{list.date}</li>
            </ul>
            <ul className="detail-trade-right">
              <li>{list.total.toLocaleString('ko-KR')} TYL</li>
              <li style={{ paddingTop: '0px' }}>
                {list.qty}주 {list.one.toLocaleString('ko-KR')} TYL
              </li>
            </ul>
          </div>
        ))
      : null,
  );

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header style={{ paddingLeft: '60px', fontSize: '16px' }}>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          {TradeList}
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
