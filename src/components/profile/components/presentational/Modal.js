import React, { useState } from 'react';
import axios from 'axios';
import '../../../../styles/sass/main.css';

const Modal = props => {
  const { open, close, header, onAccept, id } = props;
  const [nickname, setNickname] = useState('');
  const [overlap, setOverlap] = useState(false);
  const [wrongLength, setWrongLength] = useState(false);

  const handleChangeInput = event => {
    setNickname(event.target.value);
  };

  const handleComplete = () => {
    if (nickname.length < 2) {
      setWrongLength(true);
      return;
    }
    axios
      .post('api/user/change/nickname', {
        nickname: nickname,
      })
      .then(res => {
        const { code } = res.data;

        if (code === 400) {
          console.log('중복임~');
          setOverlap(true);
        } else if (code === 200) {
          window.location.reload();
        }
      });
  };

  const onChildClick = e => {
    e.stopPropagation();
  };

  if (id === 'out') {
    //로그아웃, 탈퇴
    return (
      <div onClick={close}>
        <div className={open ? 'openModal modal' : 'modal'}>
          <section onClick={onChildClick}>
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
        </div>
      </div>
    );
  } else {
    //닉네임, 프로필 사진 변경
    return (
      <div onClick={close}>
        <div className={open ? 'openModal modal' : 'modal'}>
          <section style={{ width: '300px', height: '195px' }} onClick={onChildClick}>
            <header style={{ paddingLeft: '60px' }}>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main id="modify">
              <input
                type="text"
                className="modal-input"
                placeholder={props.children}
                onChange={handleChangeInput}
                maxLength="8"
                minlength="2"
                autoFocus
              />
              {overlap ? (
                <div className="check-nickname">사용 중인 닉네임 입니다!</div>
              ) : wrongLength ? (
                <div className="check-nickname">2자 이상 입력해주세요!</div>
              ) : (
                <div className="check-nickname">&nbsp;</div>
              )}
            </main>
            <footer style={{ padding: '2px 16px 12px 16px' }}>
              <button
                className="modify"
                id={wrongLength ? '' : null}
                id={overlap ? '' : null}
                onClick={handleComplete}
              >
                완료
              </button>
            </footer>
          </section>
        </div>
      </div>
    );
  }
};

export default Modal;
