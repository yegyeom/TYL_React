import React from 'react';
import Tabs from './components/Tabs.js';
import Info from './components/Info.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../auth/userSlice';

const index = ({ match }) => {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="profile-info">
        <Info name={user.nickname} email={user.email} />
      </div>
      <div className="profile-tabs">
        <Tabs url={`${match.url}`} />
      </div>
    </>
  );
};

export default index;
