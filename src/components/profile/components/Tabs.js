import React, { useState } from 'react';
import Home from '../../home/index.js';
import Investment from '../../investment/index';
import Ranking from '../../ranking/index';
import '../../../styles/sass/main.css';
import { Route, Link } from 'react-router-dom';
import Modal from './Modal.js';

const Tabs = ({ url }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = e => {
    e.target.id === 'logout-button'
      ? setModalData({ header: '로그아웃', text: '로그아웃하시겠습니까?' })
      : setModalData({ header: '회원탈퇴', text: '탈퇴하시겠습니까?' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ul id="profile-menu" className="tabs">
        <li>
          <Link to={`${url}/nickname`}>닉네임 변경</Link>
        </li>
        <li>
          <Link to={`${url}/photo`}>프로필 사진 변경</Link>
        </li>
        <li id="logout-button" onClick={openModal}>
          로그아웃
        </li>
        <li id="delete-button" onClick={openModal} style={{ 'border-bottom': 'none' }}>
          회원탈퇴
        </li>
        <Modal open={modalOpen} close={closeModal} header={modalData.header}>
          {modalData.text}
        </Modal>
      </ul>

      <div>
        <Route path="/" component={Home} exact />
        <Route path="/${url}/nickname" component={Investment} />
        <Route path="/${url}/photo" component={Ranking} />
      </div>
    </>
  );
};
export default Tabs;
