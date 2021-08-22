import React from 'react';
import '../../../styles/sass/main.css';
import profile_img from '../../../styles/images/profile_img.png';

const Info = ({ name, email }) => {
  return (
    <div className="info">
      <div className="profile-img-box-large">
        <img src={profile_img} className="profile" />
      </div>
      <span
        className="user-name"
        style={{ fontSize: '18px', lineHeight: '60px', paddingLeft: '15px' }}
      >
        {name}&nbsp;
      </span>
      <span className="user-ment" style={{ fontSize: '15px', lineHeight: '60px' }}>
        ({email})
      </span>
    </div>
  );
};

export default Info;
