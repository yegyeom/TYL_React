import React from 'react';
import ProfileContainer from './components/container/ProfileContainer.js';

const index = ({ match }) => {
  return (
    <>
      <ProfileContainer match={match} />
    </>
  );
};

export default index;
