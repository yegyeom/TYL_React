import React from 'react';
import ProfileInfo from '../presentational/ProfileInfo.js';
import ProfileTabs from '../presentational/ProfileTabs.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../auth/userSlice';

const ProfileContainer = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <ProfileInfo
        name={user.nickname}
        email={user.email}
        profile_img={`https://testyourlife.kro.kr/api/image/profile?email=${user.email}`}
      />
      <ProfileTabs />
    </>
  );
};

export default ProfileContainer;
