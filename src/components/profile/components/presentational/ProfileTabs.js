import React, { useState } from 'react';
import '../../../../styles/sass/main.css';
import { useDispatch } from 'react-redux';
import Modal from './Modal.js';
import { logout } from '../../../auth/userSlice';
import axios from 'axios';

const ProfileTabs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalOpen(false);
  };

  const onLogout = () => {
    axios.post('api/auth/logout', null).then(() => {
      dispatch(logout());
      axios.defaults.headers.common['Authorization'] = '';
      window.location.href = '/';
    });
    setModalOpen(false);
  };

  const openModal = e => {
    if (e.target.id === 'logout-button')
      setModalData({
        id: 'out',
        header: '로그아웃',
        text: '로그아웃하시겠습니까?',
        onAccept: onLogout,
      });
    else if (e.target.id === 'delete-button')
      setModalData({
        id: 'out',
        header: '회원탈퇴',
        text: '탈퇴하시겠습니까?',
        onAccept: closeModal,
      });
    else if (e.target.id === 'nickname-button')
      setModalData({
        id: 'modify',
        header: '닉네임 변경',
        text: '한글, 영어, 숫자 조합 2-8자리',
        onAccept: closeModal,
      });
    setModalOpen(true);
  };

  return (
    <>
      <div className="profile-tabs">
        <ul id="profile-menu" className="tabs">
          <li id="nickname-button" onClick={openModal}>
            닉네임 변경
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
            id={modalData.id}
          >
            {modalData.text}
          </Modal>
        </ul>
      </div>
    </>
  );
};

export default ProfileTabs;
