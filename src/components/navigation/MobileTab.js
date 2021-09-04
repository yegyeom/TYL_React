import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from '../home/index';
import Investment from '../investment/index';
import Ranking from '../ranking/index';
import Prediction from '../prediction/index';
import Asset from '../asset/index.js';
import Profile from '../profile/index.js';
import Auth from '../auth/index.js';
import MyAssetContainer from '../asset/components/container/MyAssetContainer';

const MobileTab = ({ list }) => {
  return (
    <>
      <div className="mobile-main-menu"></div>
      <div className="mobile-content">
        <Route path="/" component={Home} exact />
        <Route path="/Investment" component={Investment} />
        <Route path="/Prediction" component={Prediction} />
        <Route path="/Ranking" component={Ranking} />
        <Route exact path="/Asset" component={Asset} />
        <Route path="/Profile" component={Profile} />
        <Route path="/login" component={Auth} />
        <Route path="/Asset/cash" component={MyAssetContainer} />
        <Route path="/Asset/stock" component={MyAssetContainer} />
        <Route path="/Asset/coin" component={MyAssetContainer} />
      </div>
    </>
  );
};

export default MobileTab;
