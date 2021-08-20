import React from 'react';
import Tabs from './components/Tabs.js';
import Info from './components/Info.js';

const index = ({ match }) => {
  return (
    <>
      <div className="profile-info">
        <Info name="틸틸" email="hi@gmail.com" />
      </div>
      <div className="profile-tabs">
        <Tabs url={`${match.url}`} />
      </div>
    </>
  );
};

export default index;
