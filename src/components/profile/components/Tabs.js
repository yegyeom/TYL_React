import React, { useState } from 'react';
import Home from '../../home/index.js';
import Investment from '../../investment/index';
import Ranking from '../../ranking/index';
import '../../../styles/sass/main.css';
import { Route, Link } from 'react-router-dom';
import Modal from './Modal.js';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../auth/userSlice';
import axios from 'axios';

const Tabs = ({ url }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalOpen(false);
  };

  const onLogout = () => {
    axios.post('/auth/logout', null).then(() => {
      dispatch(logout());
      axios.defaults.headers.common['Authorization'] = '';
      window.location.href = '/';
    });
    setModalOpen(false);
  };

  const openModal = e => {
    e.target.id === 'logout-button'
      ? setModalData({ header: '로그아웃', text: '로그아웃하시겠습니까?', onAccept: onLogout })
      : setModalData({ header: '회원탈퇴', text: '탈퇴하시겠습니까?', onAccept: closeModal });
    setModalOpen(true);
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
        <li id="delete-button" onClick={openModal} style={{ borderBottom: 'none' }}>
          회원탈퇴
        </li>
        <Modal
          open={modalOpen}
          close={closeModal}
          onAccept={modalData.onAccept}
          header={modalData.header}
        >
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
