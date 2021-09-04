import React, { useState } from 'react';
import GoogleButton from '../auth/GoogleButton';

const MenuModal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { modalState, closeModal } = props;

  const [nickname, setNickname] = useState('');
  return (
    <div className={modalState ? 'openModal modal mobile-modal' : 'modal mobile-modal'}>
      <section className="mobile-modal-section">
        <header className="mobile-modal-header">
          <span>로그인</span>
          <button className="close" onClick={closeModal}>
            &times;
          </button>
        </header>
        <main>
          <GoogleButton closeModal={closeModal} />
        </main>
      </section>
    </div>
  );
};

export default MenuModal;
