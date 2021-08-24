import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import profile_img from '../../../../styles/images/profile_img.png';
import ProfileInfo from '../presentational/ProfileInfo.js';
import ProfileTabs from '../presentational/ProfileTabs.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../auth/userSlice';

const ProfileContainer = () => {
  const user = useSelector(selectUser);
  let match = useRouteMatch();

  return (
    <>
      <ProfileInfo name={user.nickname} email={user.email} profile_img={profile_img} />
      <ProfileTabs url={match.url} />
    </>
  );
};

export default ProfileContainer;
