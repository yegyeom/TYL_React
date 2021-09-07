import React, { useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from '../home/index';
import Investment from '../investment/index';
import Ranking from '../ranking/index';
import Prediction from '../prediction/index';
import Asset from '../asset/index.js';
import Profile from '../profile/index.js';
import Auth from '../auth/index.js';
import MyAssetContainer from '../asset/components/container/MyAssetContainer';

const MobileContent = () => {
  return (
    <>
      <div className="mobile-content">
        <Route path="/" component={Home} exact />
        <Route path="/investment" component={Investment} />
        <Route path="/prediction" component={Prediction} />
        <Route path="/ranking" component={Ranking} />
        <Route exact path="/asset" component={Asset} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Auth} />
        <Route path="/asset/cash" component={MyAssetContainer} />
        <Route path="/asset/stock" component={MyAssetContainer} />
        <Route path="/asset/coin" component={MyAssetContainer} />
      </div>
    </>
  );
};

export default MobileContent;
