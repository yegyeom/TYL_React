import React from 'react';
import '../../../styles/sass/main.css';

const Info = ({ name, email }) => {
  return (
    <div className="info">
      {name} ({email})
    </div>
  );
};

export default Info;
