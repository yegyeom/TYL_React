import React from 'react';
import '../../../../styles/sass/main.css';

const ProfileInfo = ({ name, email, profile_img }) => {
  return (
    <div className="profile-info">
      <div className="info">
        <div className="profile-img-box-large">
          <img src={profile_img} className="profile" />
        </div>
        <span
          className="user-name"
          style={{ fontSize: '15px', lineHeight: '60px', paddingLeft: '15px' }}
        >
          {name}&nbsp;
        </span>
        <span className="user-ment" style={{ fontSize: '13px', lineHeight: '60px' }}>
          ({email})
        </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
