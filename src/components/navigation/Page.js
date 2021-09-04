import { useEffect, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from '../home/index';
import Investment from '../investment/index';
import Ranking from '../ranking/index';
import Prediction from '../prediction/index';
import Asset from '../asset/index.js';
import Profile from '../profile/index.js';
import Auth from '../auth/index.js';
import '../../styles/sass/main.css';
import { useSelector } from 'react-redux';
import { checkValidity, selectUser } from '../auth/userSlice';
import MyAssetContainer from '../asset/components/container/MyAssetContainer';
import profile_img from '../../styles/images/profile_img.png';

const Page = () => {
  const validity = useSelector(checkValidity);
  const user = useSelector(selectUser);
  const [bottomMenuBox, setBottomMenuBox] = useState([]);

  useEffect(() => {
    if (validity) {
      setBottomMenuBox([
        { link: '', title: user.nickname },
        { link: '/Asset', title: '내 자산' },
        { link: '/Profile', title: '내 정보' },
      ]);
    } else setBottomMenuBox([{ link: '/login', title: '로그인' }]);
  }, [validity]);

  const topMenuBox = [
    { link: '/', title: '홈' },
    { link: '/Investment', title: '투자' },
    { link: '/Prediction', title: '예측' },
    { link: '/Ranking', title: '랭킹' },
  ];

  const topMenuList = topMenuBox.map((menu, idx) => (
    <li key={idx}>
      <NavLink exact to={menu.link} activeClassName="active">
        {menu.title}
      </NavLink>
    </li>
  ));

  const bottomMenuList = bottomMenuBox.map((menu, idx) => {
    if (menu.title != '내 자산' && menu.title != '내 정보' && menu.title != '로그인') {
      return (
        <li key={idx} className="user-profile">
          <div className="profile-img-box">
            <img src={profile_img} className="profile" />
          </div>
          <span className="user-name">{menu.title}</span>
          <span className="user-ment">님, 반가워요!</span>
        </li>
      );
    }
    return (
      <li key={idx}>
        <NavLink to={menu.link} activeClassName="active">
          {menu.title}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="page">
      <div className="menu-bar">
        <div className="logo">Test Your Life</div>
        <ul className="tabs">{topMenuList}</ul>
        <ul className="tabs">{bottomMenuList}</ul>
      </div>

      <div className="content">
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
    </div>
  );
};

export default Page;
