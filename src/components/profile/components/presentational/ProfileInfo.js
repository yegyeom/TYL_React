import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../../../../styles/sass/main.css';

const ProfileInfo = ({ name, email, profile_img }) => {
  const isPc = useMediaQuery({
    query: '(min-width: 481px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  return (
    <div className="profile-info">
      <div className="info">
        {isPc && (
          <div className="profile-img-box-pc">
            <img src={profile_img} className="profile" />
          </div>
        )}
        {isMobile && (
          <div className="profile-img-box-mobile">
            <img src={profile_img} className="profile" />
          </div>
        )}
        <div className="user-info">
          <div className="user-name">{name}&nbsp;</div>
          <div className="user-email">({email})</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
