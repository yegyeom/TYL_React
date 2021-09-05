import React from 'react';
import profile_img from '../../../../styles/images/profile_img.png';
import ProfileInfo from '../presentational/ProfileInfo.js';
import ProfileTabs from '../presentational/ProfileTabs.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../auth/userSlice';

const ProfileContainer = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <ProfileInfo name={user.nickname} email={user.email} profile_img={profile_img} />
      <ProfileTabs />
    </>
  );
};

export default ProfileContainer;
