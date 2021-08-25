import React from 'react';
import '../../../../styles/sass/main.css';

const Modal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, onAccept } = props;

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
          {props.children}
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
