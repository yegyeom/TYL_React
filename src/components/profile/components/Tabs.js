import React from 'react';
import '../../../styles/sass/main.css';

const TabType = {
  NICKNAME: 'NICKNAME',
  PHOTO: 'PHOTO',
  LOGOUT: 'LOGOUT',
  DELETE: 'DELETE',
};

const TabLable = {
  [TabType.NICKNAME]: '닉네임 변경',
  [TabType.PHOTO]: '프로필 사진 변경',
  [TabType.LOGOUT]: '로그아웃',
  [TabType.DELETE]: '회원탈퇴',
};

const Tabs = () => {
  return (
    <>
      <ul className="tabs">
        {Object.values(TabType).map(tabType => (
          <li key={tabType}>{TabLable[tabType]}</li>
        ))}
      </ul>
    </>
  );
};

export default Tabs;
