import React from 'react';
import '../../../../styles/sass/main.css';

const Modal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, onAccept, id } = props;

  if (id === 'out') {
    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header style={{ paddingLeft: '60px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={onAccept}>
                예
              </button>
              <span> </span>
              <button className="close" onClick={close}>
                아니오
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    );
  } else {
    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section style={{ width: '300px', height: '180px' }}>
            <header style={{ paddingLeft: '60px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main id="modify">
              <input className="modal-input" placeholder={props.children} />
            </main>
            <footer>
              <button id="modify" onClick={onAccept}>
                완료
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    );
  }
};

export default Modal;
