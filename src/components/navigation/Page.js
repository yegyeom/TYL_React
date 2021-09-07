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

const Page = () => {
  const validity = useSelector(checkValidity);
  const user = useSelector(selectUser);
  const [bottomMenuBox, setBottomMenuBox] = useState([]);

  useEffect(() => {
    if (validity) {
      setBottomMenuBox([
        { link: '', title: user.nickname },
        { link: '/asset', title: '내 자산' },
        { link: '/profile', title: '내 정보' },
      ]);
    } else setBottomMenuBox([{ link: '/login', title: '로그인' }]);
  }, [validity]);

  const topMenuBox = [
    { link: '/', title: '홈' },
    { link: '/investment', title: '투자' },
    { link: '/prediction', title: '예측' },
    { link: '/ranking', title: '랭킹' },
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
            <img src={`https://testyourlife.kro.kr/api/image/profile?email=${user.email}`} />
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
    </div>
  );
};

export default Page;
